import Answer from '../../Answer'
import { min, range, sum } from '../util'
import input from './input'

const parseInput = () =>
  input
    .split('\n')
    .map(
      (line) =>
        line.match(/\[(?<lights>.+)\](?<buttons>.+)\{(?<joltage>.+)\}/u)!
          .groups!,
    )
    .map(({ lights, buttons, joltage }) => ({
      lights: lights.split('').map((c) => c === '#'),
      buttons: buttons
        .trim()
        .split(' ')
        .map((button) => button.slice(1, -1).split(',').map(Number)),
      joltage: joltage.split(',').map(Number),
    }))

const turnOnLights = (lights: boolean[], buttons: number[][]) => {
  const init = lights.map(() => false)
  let best: number[] | null = null

  const search = (
    current: boolean[],
    presses: number[],
    history: boolean[][],
  ) => {
    if (best && presses.length >= best.length) return
    if (current.every((l, i) => lights[i] === l)) {
      best = presses
      return
    }

    const needed = range(0, lights.length - 1).filter(
      (i) => lights[i] !== current[i],
    )
    const perfectButton = buttons.findIndex(
      (button) =>
        needed.length === button.length &&
        needed.every((i) => button.includes(i)),
    )
    if (perfectButton !== -1) {
      best = [...presses, perfectButton]
      return
    }

    for (let i = 0; i < buttons.length; i++) {
      if (presses.includes(i)) continue
      const button = buttons[i]
      const next = current.map((val, idx) =>
        button.includes(idx) ? !val : val,
      )
      if (history.some((h) => h.every((v, idx) => v === next[idx]))) continue
      search(next, [...presses, i], [...history, next])
    }
  }

  search(init, [], [])

  return best!
}

const configureJoltage = (joltage: number[], buttons: number[][]) => {
  const matrix: number[][] = joltage.map((j, i) =>
    buttons.map((btn) => (btn.includes(i) ? 1 : 0)),
  )
  const bounds = buttons.map((button) =>
    button.map((idx) => joltage[idx]).reduce(min),
  )

  const solveMatrix = (
    matrix: number[][],
    target: number[],
    bounds: number[],
  ) => {
    const rows = matrix.length
    const cols = matrix[0].length

    const pivotColumnIndices: number[] = []

    let pivotRow = 0
    const columnToPivotRow = new Map<number, number>()

    for (let col = 0; col < cols && pivotRow < rows; col++) {
      let row = pivotRow
      while (row < rows && matrix[row][col] === 0) {
        row++
      }

      if (row === rows) continue
      ;[matrix[pivotRow], matrix[row]] = [matrix[row], matrix[pivotRow]]
      ;[target[pivotRow], target[row]] = [target[row], target[pivotRow]]

      const pivotVal = matrix[pivotRow][col]
      for (let j = col; j < cols; j++) {
        matrix[pivotRow][j] /= pivotVal
      }
      target[pivotRow] /= pivotVal

      for (let i = 0; i < rows; i++) {
        if (i !== pivotRow) {
          const factor = matrix[i][col]
          if (Math.abs(factor) > 0) {
            for (let j = col; j < cols; j++) {
              matrix[i][j] -= factor * matrix[pivotRow][j]
            }

            target[i] -= factor * target[pivotRow]
          }
        }
      }

      pivotColumnIndices.push(col)
      columnToPivotRow.set(col, pivotRow)
      pivotRow++
    }

    const freeVariables: number[] = []
    const isPivot = new Set(pivotColumnIndices)

    for (let j = 0; j < cols; j++) {
      if (!isPivot.has(j)) {
        freeVariables.push(j)
      }
    }

    let minimumPresses = Infinity
    const currentSolution = new Array(cols).fill(0)

    const search = (freeVarListIdx: number, currentCost: number) => {
      if (currentCost >= minimumPresses) {
        return
      }

      if (freeVarListIdx === freeVariables.length) {
        let derivedCost = currentCost
        let possible = true

        for (let i = pivotColumnIndices.length - 1; i >= 0; i--) {
          const pivotCol = pivotColumnIndices[i]
          const pivotRowIndex = columnToPivotRow.get(pivotCol)!

          let derivedValue = target[pivotRowIndex]

          for (let j = pivotCol + 1; j < cols; j++) {
            if (Math.abs(matrix[pivotRowIndex][j]) > 1e-9) {
              derivedValue -= matrix[pivotRowIndex][j] * currentSolution[j]
            }
          }

          if (Math.abs(derivedValue - Math.round(derivedValue)) > 1e-4) {
            possible = false
            break
          }
          derivedValue = Math.round(derivedValue)

          if (derivedValue < 0 || derivedValue > bounds[pivotCol]) {
            possible = false
            break
          }

          currentSolution[pivotCol] = derivedValue
          derivedCost += derivedValue
          if (derivedCost >= minimumPresses) {
            possible = false
            break
          }
        }

        if (possible) {
          minimumPresses = derivedCost
        }

        return
      }

      const freeVariableIndex = freeVariables[freeVarListIdx]
      const freeVariableBound = bounds[freeVariableIndex]

      for (let val = 0; val <= freeVariableBound; val++) {
        currentSolution[freeVariableIndex] = val
        search(freeVarListIdx + 1, currentCost + val)
      }
    }

    search(0, 0)

    return minimumPresses
  }

  return solveMatrix(matrix, joltage, bounds)
}

export function Part1() {
  const result = parseInput()
    .map(({ lights, buttons }) => turnOnLights(lights, buttons).length)
    .reduce(sum)
  return (
    <p>
      The fewest button presses to configure the lights is{' '}
      <Answer>{result}</Answer>.
    </p>
  )
}

export function Part2() {
  const result = parseInput()
    .map(({ joltage, buttons }) => configureJoltage(joltage, buttons))
    .reduce(sum)
  return (
    <p>
      The fewest button presses to configure the joltage is{' '}
      <Answer>{result}</Answer>.
    </p>
  )
}
