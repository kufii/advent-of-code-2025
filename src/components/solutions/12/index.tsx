import Answer from '../../Answer'
import { sum } from '../util'
import input from './input'

const parseInput = () => {
  const blocks = input.split('\n\n')
  const shapes = blocks.slice(0, blocks.length - 1).map((block) =>
    block
      .split('\n')
      .slice(1)
      .map((line) => line.split('')),
  )
  const regions = blocks[blocks.length - 1]
    .split('\n')
    .map(
      (line) =>
        line.match(/(?<width>\d+)x(?<height>\d+): (?<counts>.+)/u)!.groups!,
    )
    .map(({ width, height, counts }) => ({
      width: Number(width),
      height: Number(height),
      counts: counts.split(' ').map(Number),
    }))
  return { shapes, regions }
}

const getSize = (shape: string[][]) =>
  shape.flatMap((line) => line.filter((c) => c === '#')).length

const canFit = (
  width: number,
  height: number,
  counts: number[],
  shapes: string[][][],
) => {
  const shapeSizes = shapes.map(getSize)
  const totalSize = counts.map((count, i) => count * shapeSizes[i]).reduce(sum)
  if (totalSize > width * height) return false
  return true
}

export function Part1() {
  const { shapes, regions } = parseInput()
  const numCanFit = regions.filter(({ width, height, counts }) =>
    canFit(width, height, counts, shapes),
  ).length
  return (
    <p>
      <Answer>{numCanFit}</Answer> regions can fit all the presents listed.
    </p>
  )
}
