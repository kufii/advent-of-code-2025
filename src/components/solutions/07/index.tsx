import { createEffect, createSignal, onCleanup, Show } from 'solid-js'
import Answer from '../../Answer'
import Visualization from '../../Visualization'
import { output2dArray, setIntervalFast, sum } from '../util'
import input from './input'

const parseInput = () => input.split('\n').map((line) => line.split(''))

const shootBeams = function* (grid: string[][]) {
  const start = grid[0].indexOf('S')
  const beams = new Map<number, number>([[start, 1]])
  let numSplits = 0
  for (let y = 1; y < grid.length; y++) {
    const currentBeams = Array.from(beams).filter(([, num]) => num > 0)
    for (const [beam, num] of currentBeams) {
      if (grid[y][beam] === '^') {
        beams.set(beam - 1, (beams.get(beam - 1) ?? 0) + num)
        grid[y][beam - 1] = '|'
        beams.set(beam + 1, (beams.get(beam + 1) ?? 0) + num)
        grid[y][beam + 1] = '|'
        beams.set(beam, 0)
        numSplits++
      } else {
        grid[y][beam] = '|'
      }
    }
    yield { grid, numSplits, totalPaths: 0 }
  }
  const totalPaths = Array.from(beams.values()).reduce(sum)
  yield { grid, numSplits, totalPaths }
}

export function Part1() {
  const [output, setOutput] = createSignal('')
  const [result, setResult] = createSignal<null | number>(null)
  const [showVisualization, setShowVisualization] = createSignal(false)

  createEffect(() => {
    setResult(null)
    setOutput('')
    const grid = parseInput()
    const generator = shootBeams(grid)

    if (showVisualization()) {
      let numSplits = 0

      const interval = setIntervalFast(() => {
        const { value, done } = generator.next()
        if (value) {
          numSplits = value.numSplits
          setOutput(output2dArray(value.grid))
        }
        if (done) {
          setResult(numSplits)
          clearInterval(interval)
        }
      }, 100)

      onCleanup(() => clearInterval(interval))
    } else {
      const { numSplits } = [...generator].pop()!
      setResult(numSplits)
    }
  })

  return (
    <>
      <Show when={result()}>
        <p>
          The beam will be split <Answer>{result()}</Answer> times.
        </p>
      </Show>
      <Visualization show={showVisualization()} setShow={setShowVisualization}>
        {output()}
      </Visualization>
    </>
  )
}

export function Part2() {
  const grid = parseInput()
  const { totalPaths } = [...shootBeams(grid)].pop()!
  return (
    <p>
      The particle ends up on <Answer>{totalPaths}</Answer> different timelines.
    </p>
  )
}
