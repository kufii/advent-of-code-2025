import { Title } from '@solidjs/meta'
import { A, MatchFilters, useParams } from '@solidjs/router'
import NotFound from './[...404]'
import days from '../components/solutions'
import { createEffect, createMemo, createSignal, Show } from 'solid-js'
import CodeViewer from '../components/CodeViewer'
import { FiChevronLeft, FiChevronRight, FiExternalLink } from 'solid-icons/fi'
import './day.css'

export const filters: MatchFilters = {
  id: /^\d+$/u,
}

export default function Day() {
  const params = useParams()
  const [part, setPart] = createSignal(0)
  const [showCode, setShowCode] = createSignal(false)
  createEffect(() => {
    void params.id
    if (document.activeElement?.ariaDisabled === 'true') {
      ;(document.activeElement as HTMLElement).blur()
    }
    setPart(0)
    setShowCode(false)
  })
  const day = createMemo(() => Number(params.id))
  const solution = createMemo(() => days[day() - 1])

  return (
    <Show when={day() >= 1 && day() <= 12} fallback={<NotFound />}>
      <Title>Advent of Code 2025 - Day {day()}</Title>
      <h1>
        Day {day()}{' '}
        <a
          href={`https://adventofcode.com/2025/day/${day()}`}
          class='btn btn-compact'
          target='_blank'
          rel='noopener noreferrer'
          aria-label='View the problem on the Advent of Code website'
        >
          <FiExternalLink size={24} />
        </a>
      </h1>
      <Show when={solution()} fallback={<p>Solution not yet implemented.</p>}>
        <div class='btn-container'>
          <button type='button' class='btn' onClick={() => setPart(1)}>
            Part 1
          </button>
          <button type='button' class='btn' onClick={() => setPart(2)}>
            Part 2
          </button>
          <button
            type='button'
            class='btn btn-plain'
            onClick={() => setShowCode((prev) => !prev)}
          >
            {showCode() ? 'Hide Code' : 'View Code'}
          </button>
        </div>
        <Show when={showCode()}>
          <CodeViewer day={day()} />
        </Show>
        <Show when={part()}>
          <section class='output'>
            <h2>Part {part()}</h2>
            {part() === 1 ? solution().Part1() : solution().Part2()}
          </section>
        </Show>
      </Show>
      <div class='btn-container nav-btns'>
        <A
          href={`/day/${day() - 1}`}
          class='btn btn-plain btn-circle'
          aria-label='Previous Day'
          aria-disabled={day() <= 1}
          tabIndex={day() <= 1 ? -1 : undefined}
        >
          <FiChevronLeft size={32} />
        </A>
        <A
          href={`/day/${day() + 1}`}
          class='btn btn-plain btn-circle'
          aria-label='Next Day'
          aria-disabled={day() >= 12}
          tabIndex={day() >= 12 ? -1 : undefined}
        >
          <FiChevronRight size={32} />
        </A>
      </div>
    </Show>
  )
}
