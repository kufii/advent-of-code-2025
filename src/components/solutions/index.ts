import { JSX } from 'solid-js'
import * as day1 from './01'
import * as day2 from './02'
import * as day3 from './03'

interface Day {
  Part1: () => JSX.Element
  Part2: () => JSX.Element
}

export default [day1, day2, day3] as Day[]
