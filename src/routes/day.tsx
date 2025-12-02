import { Title } from '@solidjs/meta'
import { A, MatchFilters, useParams } from '@solidjs/router'
import NotFound from './[...404]'
import days from '~/components/solutions'
import { createEffect, createMemo, createSignal, Show } from 'solid-js'
import './day.css'

export const filters: MatchFilters = {
  id: /^\d+$/u,
}

export default function Day() {
  const params = useParams()
  const [part, setPart] = createSignal(0)
  createEffect(() => {
    void params.id
    setPart(0)
  })
  const day = createMemo(() => Number(params.id))
  const solution = createMemo(() => days[day() - 1])

  return (
    <>
      {day() < 1 || day() > 12 || !solution ? (
        <NotFound />
      ) : (
        <>
          <Title>Advent of Code 2025 - Day {day()}</Title>
          <h1>Day {day()}</h1>
          <div class='btn-container'>
            <button type='button' class='btn' onClick={() => setPart(1)}>
              Part 1
            </button>
            <button type='button' class='btn' onClick={() => setPart(2)}>
              Part 2
            </button>
          </div>
          <Show when={part()}>
            <section class='output'>
              <h2>Part {part()}</h2>
              {part() === 1 ? solution().Part1() : solution().Part2()}
            </section>
          </Show>
          <div class='btn-container nav-btns'>
            <A
              href={`/day/${day() - 1}`}
              class='btn btn-plain'
              aria-disabled={day() <= 1}
            >
              ← Previous Day
            </A>
            <A
              href={`/day/${day() + 1}`}
              class='btn btn-plain'
              aria-disabled={day() >= days.length}
            >
              Next Day →
            </A>
          </div>
        </>
      )}
    </>
  )
}
