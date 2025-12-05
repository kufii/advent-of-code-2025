import Answer from '../../Answer'
import { sortBy, sum } from '../util'
import input from './input'

const parseInput = () => {
  const [freshIds, ingredients] = input.split('\n\n')
  return {
    freshIds: freshIds.split('\n').map((line) => line.split('-').map(Number)),
    ingredients: ingredients.split('\n').map(Number),
  }
}

const isFresh = (id: number, freshIds: number[][]) =>
  freshIds.some(([start, end]) => id >= start && id <= end)

const simplifyRanges = (ranges: number[][]) => {
  ranges = ranges.sort(
    sortBy(
      ([from]) => from,
      ([, to]) => to,
    ),
  )
  const simplified = [ranges[0]]
  for (const [start, end] of ranges.slice(1)) {
    const i = simplified.length - 1
    const lastEnd = simplified[i][1]
    if (start <= lastEnd) {
      simplified[i][1] = Math.max(lastEnd, end)
    } else {
      simplified.push([start, end])
    }
  }
  return simplified
}

export function Part1() {
  const { freshIds, ingredients } = parseInput()
  const result = ingredients.filter((id) => isFresh(id, freshIds)).length
  return (
    <p>
      <Answer>{result}</Answer> of the available ingredient IDs are fresh.
    </p>
  )
}

export function Part2() {
  const { freshIds } = parseInput()
  const numFreshIds = simplifyRanges(freshIds)
    .map(([from, to]) => to - from + 1)
    .reduce(sum)
  return (
    <p>
      <Answer>{numFreshIds}</Answer> ingredient IDs are considered fresh.
    </p>
  )
}
