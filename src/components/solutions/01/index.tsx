import { mod } from '~/util'
import input from './input'
import Answer from '~/components/Answer'

const parseInput = () =>
  input
    .split('\n')
    .map((line) => line.match(/(?<dir>[LR])(?<num>\d+)/iu)!.groups!)
    .map(({ dir, num }) => (dir === 'L' ? Number(num) * -1 : Number(num)))

const crackCode = (steps: number[], countPasses = false) => {
  let pos = 50
  let num0 = 0
  for (let num of steps) {
    if (countPasses) num0 += Math.floor(Math.abs(num) / 100)
    num = mod(num, num < 0 ? -100 : 100)
    if (
      countPasses &&
      pos > 0 &&
      ((num > 0 && num + pos >= 100) || (num < 0 && num + pos <= 0))
    )
      num0++
    pos = mod(pos + num, 100)
    if (!countPasses && pos === 0) num0++
  }
  return num0
}

export function Part1() {
  const code = crackCode(parseInput())
  return (
    <p>
      The password to open the door is <Answer>{code}</Answer>.
    </p>
  )
}

export function Part2() {
  const code = crackCode(parseInput(), true)
  return (
    <p>
      The password to open the door using 0x434C49434B is{' '}
      <Answer>{code}</Answer>.
    </p>
  )
}
