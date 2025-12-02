import { isEven, sum } from '../../../util'
import input from './input'
import Answer from '../../Answer'

const parseInput = () =>
  input
    .split(',')
    .map((x) => x.split('-'))
    .map(([from, to]) => ({ from: Number(from), to: Number(to) }))

const getInvalidIds = (from: number, to: number, checkAllLengths = false) => {
  const invalidIds = []
  for (let num = from; num <= to; num++) {
    const str = num.toString()
    if (!checkAllLengths && !isEven(str.length)) continue
    for (
      let chunk = checkAllLengths ? 1 : str.length / 2;
      chunk <= str.length / 2;
      chunk++
    ) {
      if (str.length % chunk) continue
      const regex = new RegExp(`.{${chunk}}`, 'gu')
      const chunks = str.match(regex)!
      if (chunks.every((n) => n === chunks[0])) {
        invalidIds.push(num)
        break
      }
    }
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
