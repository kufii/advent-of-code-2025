import { createEffect, createSignal, Show } from 'solid-js'
import Answer from '../../Answer'
import { desc, dfs, Point3, product, sortBy } from '../util'
import input from './input'

const parseInput = () =>
  input
    .split('\n')
    .map((line) => line.split(',').map(Number))
    .map(([x, y, z]) => ({ x, y, z }))

const key = ({ x, y, z }: Point3) => `${x},${y},${z}`

const unKey = (k: string): Point3 => {
  const [x, y, z] = k.split(',').map(Number)
  return { x, y, z }
}

const dist = (a: Point3, b: Point3) =>
  Math.sqrt(
    Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2) + Math.pow(a.z - b.z, 2),
  )

const getConnectionsMap = (points: Point3[]) =>
  new Map<string, Set<string>>(points.map((p) => [key(p), new Set<string>()]))

const getAllDistances = (points: Point3[]) =>
  points
    .flatMap((a) =>
      points
        .filter((b) => key(a).localeCompare(key(b)) < 0)
        .map((b) => ({ from: key(a), to: key(b), dist: dist(a, b) })),
    )
    .sort(sortBy((d) => d.dist))

export function Part1() {
  const points = parseInput()
  const connections = getConnectionsMap(points)
  const distances = getAllDistances(points)

  distances.slice(0, 1000).forEach(({ from, to }) => {
    connections.get(from)!.add(to)
    connections.get(to)!.add(from)
  })

  const circuits: Set<string>[] = []
  while (connections.size) {
    const start = connections.keys().next().value!
    const circuit = dfs(start, (node) => [...connections.get(node)!])
    circuit.values().forEach((k) => connections.delete(k))
    circuits.push(circuit)
  }

  const result = circuits
    .map((c) => c.size)
    .sort(sortBy(desc((n) => n)))
    .slice(0, 3)
    .reduce(product)

  return (
    <p>
      After 1000 connections the product of the size of the 3 largest circuits
      is <Answer>{result}</Answer>.
    </p>
  )
}

export function Part2() {
  const [result, setResult] = createSignal<number | null>(null)

  createEffect(() => {
    setResult(null)

    setTimeout(() => {
      const points = parseInput()
      const connections = getConnectionsMap(points)
      const distances = getAllDistances(points)

      const unvisited = new Set<string>(connections.keys())

      let from: string = ''
      let to: string = ''
      while (true) {
        ;({ from, to } = distances.shift()!)
        connections.get(from)!.add(to)
        connections.get(to)!.add(from)
        unvisited.delete(from)
        unvisited.delete(to)
        if (unvisited.size === 0) {
          const circuit = dfs(from, (node) => [...connections.get(node)!])
          if (circuit.size === points.length) {
            break
          }
        }
      }

      const result = unKey(from).x * unKey(to).x
      setResult(result)
    }, 0)
  })

  return (
    <p>
      <Show when={result()} fallback='Loading...'>
        After connecting all points, the product of the x-coordinates of the
        last connection is <Answer>{result()}</Answer>.
      </Show>
    </p>
  )
}
