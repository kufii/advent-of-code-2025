import { JSX } from 'solid-js'
import * as day1 from './01'
import * as day2 from './02'

interface Day {
  Part1: () => JSX.Element
  Part2: () => JSX.Element
}

export default [day1, day2] as Day[]
