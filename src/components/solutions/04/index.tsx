import Answer from '../../Answer'
import { createEffect, createSignal, onCleanup, Show } from 'solid-js'
import { output2dArray, setIntervalFast } from '../util'
import input from './input'
import Visualization from '../../Visualization'

const parseInput = () => input.split('\n').map((line) => line.split(''))

const getAccessibleRolls = (grid: string[][]) => {
  const getAdjacent = (x: number, y: number) =>
    [-1, 0, 1].flatMap((dx) =>
      [-1, 0, 1]
        .filter((dy) => Math.abs(dx) + Math.abs(dy))
        .map((dy) => [x + dx, y + dy])
        .filter(
          ([ax, ay]) =>
            ay >= 0 && ay < grid.length && ax >= 0 && ax < grid[ay].length,
        ),
    )

  const accessibleRolls = []

  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[y].length; x++) {
      if (grid[y][x] === '.') continue
      const adjacentRolls = getAdjacent(x, y).filter(
        ([ax, ay]) => grid[ay][ax] === '@',
      )
      if (adjacentRolls.length < 4) {
        accessibleRolls.push([x, y])
      }
    }
  }

  return accessibleRolls
}

export function Part1() {
  const result = getAccessibleRolls(parseInput()).length
  return (
    <p>
      <Answer>{result}</Answer> rolls of paper are accessible via forklift.
    </p>
  )
}

export function Part2() {
  const [result, setResult] = createSignal(null as number | null)
  const [output, setOutput] = createSignal('')
  const [showVisualization, setShowVisualization] = createSignal(false)

  createEffect(() => {
    setResult(null)
    const grid = parseInput()
    let rolls
    let removedPaper = 0
    let id: number

    const tick = () => {
      if (showVisualization()) setOutput(output2dArray(grid))
      rolls = getAccessibleRolls(grid)
      removedPaper += rolls.length
      rolls.forEach(([x, y]) => (grid[y][x] = '.'))
      if (!rolls.length) {
        setResult(removedPaper)
        clearInterval(id)
        return false
      }
      return true
    }

    if (showVisualization()) id = setIntervalFast(tick, 100)
    else
      while (tick()) {
        //
      }

    onCleanup(() => clearInterval(id))
  })

  return (
    <>
      <Show when={result()}>
        <p>
          The elves can remove <Answer>{result()}</Answer> rolls of paper.
        </p>
      </Show>
      <Visualization show={showVisualization()} setShow={setShowVisualization}>
        {output()}
      </Visualization>
    </>
  )
}
