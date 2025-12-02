import { Accessor, For, Setter } from 'solid-js'
import { FiMenu } from 'solid-icons/fi'
import './Navigation.css'
import { range } from '~/util'
import { A } from '@solidjs/router'

interface Props {
  menuOpen: Accessor<boolean>
  setMenuOpen: Setter<boolean>
}

export default function Navigation(props: Props) {
  return (
    <>
      <header class='nav' onClick={() => props.setMenuOpen(false)}>
        <button
          type='button'
          class='nav-btn nav-skip'
          onClick={() =>
            (
              document
                .getElementById('main-content')
                ?.querySelector(
                  'a:not([disabled]), button:not([disabled]), input[type=text]:not([disabled]), [tabindex]:not([disabled]):not([tabindex="-1"])',
                ) as HTMLElement
            )?.focus()
          }
        >
          Skip nav
        </button>
        <button
          type='button'
          class='nav-btn nav-menu-btn'
          aria-label={
            props.menuOpen() ? 'close navigation menu' : 'open navigation menu'
          }
          onClick={(e) => {
            props.setMenuOpen((prev) => !prev)
            e.stopImmediatePropagation()
          }}
          aria-expanded={props.menuOpen()}
          aria-controls='nav-menu'
        >
          <FiMenu size={24} />
        </button>
        <A class='nav-title' href='/'>
          advent of code 2025
        </A>
        <button type='button' class='nav-btn' />
      </header>
      <div
        id='nav-menu'
        classList={{
          'nav-menu': true,
          open: props.menuOpen(),
        }}
        role='dialog'
        aria-modal='true'
        aria-hidden={!props.menuOpen()}
        onClick={() => props.setMenuOpen(false)}
      >
        <nav onClick={(e) => e.stopImmediatePropagation()}>
          <ul>
            <For each={range(1, 12)}>
              {(day) => (
                <li>
                  <A href={`/day/${day}`} activeClass='active'>
                    Day {day}
                  </A>
                </li>
              )}
            </For>
          </ul>
        </nav>
      </div>
    </>
  )
}
