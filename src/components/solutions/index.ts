import { JSX } from 'solid-js'
import * as day1 from './01'
import * as day2 from './02'
import * as day3 from './03'
import * as day4 from './04'
import * as day5 from './05'
import * as day6 from './06'
import * as day7 from './07'
import * as day8 from './08'
import * as day9 from './09'

interface Day {
  Part1: () => JSX.Element
  Part2: () => JSX.Element
}

export default [day1, day2, day3, day4, day5, day6, day7, day8, day9] as Day[]
