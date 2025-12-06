import Answer from '../../Answer'
import { product, sum } from '../util'
import input from './input'

const parseInput = () => {
  const regex = /\s+/gu
  const nums = input.split('\n')
  const operators = nums.pop()!.split(regex).filter(Boolean)
  return {
    nums: nums.map((line) => line.split(regex).filter(Boolean).map(Number)),
    operators,
  }
}

const parseInput2 = () => {
  const nums = input.split('\n')
  const operators = nums
    .pop()!
    .split(/([*+]+\s*)(?:\s|$)/gu)
    .filter(Boolean)
  return { nums, operators }
}

export function Part1() {
  const { nums, operators } = parseInput()
  const result = operators
    .map((op, i) =>
      nums.map((line) => line[i]).reduce(op === '+' ? sum : product),
    )
    .reduce(sum)
  return (
    <p>
      The grand total of all the problems is <Answer>{result}</Answer>.
    </p>
  )
}

export function Part2() {
  const { nums, operators } = parseInput2()
  let i = nums[0].length - 1
  let total = 0
  for (const op of operators.reverse()) {
    const problem: number[] = []
    for (let j = 0; j < op.length; j++) {
      const n = Number(nums.map((line) => line[i]).join(''))
      problem.push(n)
      i--
    }
    total += problem.reduce(op.trim() === '+' ? sum : product)
    i--
  }
  return (
    <p>
      When using right to left columns, the grand total of all the problems is{' '}
      <Answer>{total}</Answer>.
    </p>
  )
}
