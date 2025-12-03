import { sum } from '../../../util'
import Answer from '../../Answer'
import input from './input'

const parseInput = () =>
  input.split('\n').map((line) => line.split('').map(Number))

const getLargestVoltage = (bank: number[], digits: number) => {
  let index = -1
  let number = ''
  for (let n = 0; n < digits; n++) {
    const current = bank.slice(index + 1, bank.length - digits + n + 1)
    const max = Math.max(...current)
    index += current.indexOf(max) + 1
    number += max
  }
  return Number(number)
}

export const Part1 = () => {
  const result = parseInput()
    .map((bank) => getLargestVoltage(bank, 2))
    .reduce(sum)
  return (
    <p>
      The maximum joltage when using 2 batteries is <Answer>{result}</Answer>.
    </p>
  )
}

export const Part2 = () => {
  const result = parseInput()
    .map((bank) => getLargestVoltage(bank, 12))
    .reduce(sum)
  return (
    <p>
      The maximum joltage when using 12 batteries is <Answer>{result}</Answer>.
    </p>
  )
}
