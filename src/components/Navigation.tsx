import { For } from 'solid-js'
import { FiMenu } from 'solid-icons/fi'
import { range } from './solutions/util'
import { A } from '@solidjs/router'
import { AiFillGithub } from 'solid-icons/ai'
import './Navigation.css'

interface Props {
  menuOpen: boolean
  setMenuOpen: (next: boolean | ((prev: boolean) => boolean)) => void
}

export default function Navigation(props: Props) {
  return (
    <>
      <header class='nav' onClick={() => props.setMenuOpen(false)}>
        <button
          type='button'
          class='nav-btn nav-skip'
          onClick={() => {
            props.setMenuOpen(false)
            ;(
              document
                .getElementById('main-content')
                ?.querySelector(
                  'a:not([disabled]), button:not([disabled]), input[type=text]:not([disabled]), [tabindex]:not([disabled]):not([tabindex="-1"])',
                ) as HTMLElement
            )?.focus()
          }}
        >
          Skip nav
        </button>
        <button
          type='button'
          class='nav-btn nav-menu-btn'
          aria-label={
            props.menuOpen ? 'close navigation menu' : 'open navigation menu'
          }
          onClick={(e) => {
            props.setMenuOpen((prev) => !prev)
            e.stopImmediatePropagation()
          }}
          aria-expanded={props.menuOpen}
          aria-controls='nav-menu'
        >
          <FiMenu size={24} />
        </button>
        <span>
          <A class='nav-title' href='/'>
            advent of code 2025
          </A>
        </span>
        <a
          class='nav-btn'
          href='https://github.com/kufii/advent-of-code-2025'
          rel='noopener noreferrer'
          target='_blank'
          aria-label='View source on GitHub'
        >
          <AiFillGithub size={24} />
        </a>
      </header>
      <div
        id='nav-menu'
        classList={{
          'nav-menu': true,
          open: props.menuOpen,
        }}
        role='dialog'
        aria-modal='true'
        aria-hidden={!props.menuOpen}
        onClick={() => props.setMenuOpen(false)}
      >
        <nav onClick={(e) => e.stopImmediatePropagation()}>
          <ul>
            <For each={range(1, 12)}>
              {(day) => (
                <li>
                  <A
                    href={`/day/${day}`}
                    activeClass='active'
                    onClick={() => props.setMenuOpen(false)}
                    tabIndex={props.menuOpen ? undefined : -1}
                  >
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
