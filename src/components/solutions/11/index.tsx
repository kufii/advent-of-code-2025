import Answer from '../../Answer'
import input from './input'

const parseInput = () =>
  input
    .split('\n')
    .map((line) => line.match(/(?<device>.+): (?<output>.+)/u)!.groups!)
    .reduce(
      (acc, { device, output }) => acc.set(device, output.trim().split(' ')),
      new Map<string, string[]>(),
    )

const countPaths = (
  graph: Map<string, string[]>,
  start: string,
  end: string,
) => {
  const inDegree = new Map<string, number>()
  for (const node of graph.keys()) inDegree.set(node, 0)
  for (const neighbors of graph.values()) {
    for (const n of neighbors) inDegree.set(n, (inDegree.get(n) ?? 0) + 1)
  }
  const queue = [...graph.keys()].filter((n) => inDegree.get(n) === 0)
  const topo: string[] = []
  while (queue.length) {
    const node = queue.shift()!
    topo.push(node)
    for (const neighbor of graph.get(node) || []) {
      inDegree.set(neighbor, inDegree.get(neighbor)! - 1)
      if (inDegree.get(neighbor) === 0) queue.push(neighbor)
    }
  }

  const paths = new Map<string, number>()
  for (const node of topo) paths.set(node, 0)
  paths.set(start, 1)
  for (const node of topo) {
    for (const neighbor of graph.get(node) || []) {
      paths.set(neighbor, (paths.get(neighbor) ?? 0) + (paths.get(node) ?? 0))
    }
  }
  return paths.get(end) ?? 0
}

export function Part1() {
  const devices = parseInput()
  const paths = countPaths(devices, 'you', 'out')

  return (
    <p>
      There are <Answer>{paths}</Answer> different paths from you to out.
    </p>
  )
}

export function Part2() {
  const devices = parseInput()

  const svrToFft = countPaths(devices, 'svr', 'fft')
  const fftToDac = countPaths(devices, 'fft', 'dac')
  const dacToOut = countPaths(devices, 'dac', 'out')
  const svrToDac = countPaths(devices, 'svr', 'dac')
  const dacToFft = countPaths(devices, 'dac', 'fft')
  const fftToOut = countPaths(devices, 'fft', 'out')

  const totalPaths =
    svrToFft * fftToDac * dacToOut + svrToDac * dacToFft * fftToOut

  return (
    <p>
      There are <Answer>{totalPaths}</Answer> different paths from svr to out
      that pass through fft and dac.
    </p>
  )
}
