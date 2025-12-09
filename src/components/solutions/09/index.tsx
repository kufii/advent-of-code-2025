import { createEffect, createSignal, onCleanup, Show } from 'solid-js'
import Answer from '../../Answer'
import { desc, Point, sortBy } from '../util'
import input from './input'

const parseInput = (): Point[] =>
  input
    .split('\n')
    .map((line) => line.split(',').map(Number))
    .map(([x, y]) => ({ x, y }))

const key = (p: Point) => `${p.x},${p.y}`

const calculateRect = (a: Point, b: Point) =>
  (Math.abs(a.x - b.x) + 1) * (Math.abs(a.y - b.y) + 1)

const getAllRects = (points: Point[]) =>
  points
    .flatMap((a) =>
      points
        .filter((b) => key(a).localeCompare(key(b)) < 0)
        .map((b) => ({ a, b, area: calculateRect(a, b) })),
    )
    .sort(sortBy(desc((r) => r.area)))

const orderPoints = (points: Point[]) => {
  const [start] = points.sort(
    sortBy(
      (p) => p.x,
      (p) => p.y,
    ),
  )

  const ordered = [start]
  const visited = new Set([start])
  let current = start

  while (ordered.length < points.length) {
    const candidates = points
      .filter((p) => !visited.has(p))
      .filter((p) => p.x === current.x || p.y === current.y)
      .sort(sortBy((p) => calculateRect(current, p)))

    if (candidates.length === 0) break

    const next = candidates[0]
    ordered.push(next)
    visited.add(next)
    current = next
  }

  return ordered
}

const createCache = (points: Point[]) => {
  const perimeter = new Map<string, boolean>()
  for (let i = 0; i < points.length; i++) {
    const current = points[i]
    const next = points[(i + 1) % points.length]

    if (current.x === next.x) {
      for (
        let y = Math.min(current.y, next.y);
        y <= Math.max(current.y, next.y);
        y++
      ) {
        perimeter.set(key({ x: current.x, y }), true)
      }
    } else if (current.y === next.y) {
      for (
        let x = Math.min(current.x, next.x);
        x <= Math.max(current.x, next.x);
        x++
      ) {
        perimeter.set(key({ x, y: current.y }), true)
      }
    }
  }
  return perimeter
}

const isInsidePerimeter = (
  point: Point,
  perimeter: Point[],
  cache: Map<string, boolean>,
) => {
  const k = key(point)
  if (cache.has(k)) return cache.get(k)!

  let inside = false

  for (let i = 0; i < perimeter.length; i++) {
    const current = perimeter[i]
    const next = perimeter[(i + 1) % perimeter.length]

    if (
      current.y > point.y !== next.y > point.y &&
      point.x <
        ((next.x - current.x) * (point.y - current.y)) / (next.y - current.y) +
          current.x
    ) {
      inside = !inside
    }
  }

  cache.set(k, inside)
  return inside
}

const rectIsInPerimeter = (
  { a, b }: { a: Point; b: Point },
  perimeter: Point[],
  cache: Map<string, boolean>,
) => {
  const corners = [
    { x: Math.min(a.x, b.x), y: Math.min(a.y, b.y) },
    { x: Math.max(a.x, b.x), y: Math.min(a.y, b.y) },
    { x: Math.max(a.x, b.x), y: Math.max(a.y, b.y) },
    { x: Math.min(a.x, b.x), y: Math.max(a.y, b.y) },
  ]
  if (!corners.every((corner) => isInsidePerimeter(corner, perimeter, cache)))
    return false

  for (let i = 0; i < corners.length; i++) {
    const current = corners[i]
    const next = corners[(i + 1) % corners.length]

    if (current.x === next.x) {
      for (
        let y = Math.min(current.y, next.y) + 1;
        y <= Math.max(current.y, next.y) - 1;
        y++
      ) {
        if (!isInsidePerimeter({ x: current.x, y }, perimeter, cache))
          return false
      }
    } else if (current.y === next.y) {
      for (
        let x = Math.min(current.x, next.x) + 1;
        x <= Math.max(current.x, next.x) - 1;
        x++
      ) {
        if (!isInsidePerimeter({ x, y: current.y }, perimeter, cache))
          return false
      }
    }
  }
  return true
}

export function Part1() {
  const points = parseInput()
  const rects = getAllRects(points)
  const result = rects[0].area
  return (
    <p>
      The largest area of any rectangle is <Answer>{result}</Answer>.
    </p>
  )
}

export function Part2() {
  const [result, setResult] = createSignal<number | null>(null)
  createEffect(() => {
    setResult(null)
    const perimeter = orderPoints(parseInput())
    const rects = getAllRects(perimeter)
    const cache = createCache(perimeter)
    const loop = function* () {
      let n = 0
      for (const rect of rects) {
        n++
        if (n % 500 === 0) yield
        if (rectIsInPerimeter({ a: rect.a, b: rect.b }, perimeter, cache)) {
          setResult(rect.area)
          return
        }
      }
    }
    const gen = loop()
    const interval = setInterval(() => {
      const { done } = gen.next()
      if (done) clearInterval(interval)
    }, 0)

    onCleanup(() => clearInterval(interval))
  })
  return (
    <p>
      <Show
        when={result() !== null}
        fallback='Calculating... This takes a while...'
      >
        The largest area of any rectangle using only red and green tiles is{' '}
        <Answer>{result()}</Answer>.
      </Show>
    </p>
  )
}
