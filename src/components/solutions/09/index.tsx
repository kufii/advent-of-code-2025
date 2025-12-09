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

const lineIntersectsPerimeter = (a: Point, b: Point, perimeter: Point[]) => {
  for (let i = 0; i < perimeter.length; i++) {
    const current = perimeter[i]
    const next = perimeter[(i + 1) % perimeter.length]

    if (
      (a.x === b.x && current.x === next.x) ||
      (a.y === b.y && current.y === next.y)
    )
      continue

    if (
      a.x === b.x &&
      Math.min(a.y, b.y) < current.y &&
      current.y < Math.max(a.y, b.y) &&
      a.x >= Math.min(current.x, next.x) &&
      a.x <= Math.max(current.x, next.x)
    ) {
      return true
    }

    if (
      a.y === b.y &&
      Math.min(a.x, b.x) < current.x &&
      current.x < Math.max(a.x, b.x) &&
      a.y >= Math.min(current.y, next.y) &&
      a.y <= Math.max(current.y, next.y)
    ) {
      return true
    }
  }
  return false
}

const rectIsInPerimeter = (
  { a, b }: { a: Point; b: Point },
  perimeter: Point[],
) => {
  const corners = [
    { x: Math.min(a.x, b.x), y: Math.min(a.y, b.y) },
    { x: Math.max(a.x, b.x), y: Math.min(a.y, b.y) },
    { x: Math.max(a.x, b.x), y: Math.max(a.y, b.y) },
    { x: Math.min(a.x, b.x), y: Math.max(a.y, b.y) },
  ]

  for (let i = 0; i < corners.length; i++) {
    const current = corners[i]
    const next = corners[(i + 1) % corners.length]
    if (lineIntersectsPerimeter(current, next, perimeter)) return false
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
  const perimeter = orderPoints(parseInput())
  const rects = getAllRects(perimeter)
  const biggest = rects.find(({ a, b }) =>
    rectIsInPerimeter({ a, b }, perimeter),
  )!
  return (
    <p>
      The largest area of any rectangle using only red and green tiles is{' '}
      <Answer>{biggest.area}</Answer>.
    </p>
  )
}
