import { sum } from '../../../util'
import input from './input'
import Answer from '../../Answer'

const parseInput = () =>
  input
    .split(',')
    .map((x) => x.split('-'))
    .map(([from, to]) => ({ from: Number(from), to: Number(to) }))

const getInvalidIds = (
  from: number,
  to: number,
  checkMultipleRepeats = false,
) => {
  const invalidIds = []
  for (let num = from; num <= to; num++) {
    const str = num.toString()
    const regex = new RegExp(
      `^(\\d+)\\1${checkMultipleRepeats ? '+' : ''}$`,
      'gu',
    )
    if (str.match(regex)) invalidIds.push(num)
  }
  return invalidIds
}

export function Part1() {
  const result = parseInput()
    .flatMap(({ from, to }) => getInvalidIds(from, to))
    .reduce(sum)
  return (
    <p>
      The sum of all invalid ids is <Answer>{result}</Answer>.
    </p>
  )
}

export function Part2() {
  const result = parseInput()
    .flatMap(({ from, to }) => getInvalidIds(from, to, true))
    .reduce(sum)
  return (
    <p>
      The sum of all invalid ids using the new rules is{' '}
      <Answer>{result}</Answer>.
    </p>
  )
}
