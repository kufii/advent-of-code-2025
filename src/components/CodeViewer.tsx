/* eslint-disable solid/no-innerhtml */
import { highlight, languages } from 'prismjs'
import 'prismjs/components/prism-typescript'
import 'prismjs/components/prism-jsx'
import 'prismjs/components/prism-tsx'
import { createEffect, createSignal, DEV, Show } from 'solid-js'
import 'prism-themes/themes/prism-xonokai.min.css'
import './CodeViewer.css'
import { FiRefreshCw } from 'solid-icons/fi'

interface Props {
  day: number
}

export default function CodeViewer(props: Props) {
  const getJsDelivrUrl = (purge = false) =>
    `https://${purge ? 'purge' : 'cdn'}.jsdelivr.net/gh/kufii/advent-of-code-2025@main/src/components/solutions/${props.day.toString().padStart(2, '0')}/index.tsx`
  const [code, setCode] = createSignal('')

  const loadCode = async () => {
    try {
      const response = await fetch(getJsDelivrUrl(), { cache: 'no-cache' })
      const text = await response.text()
      setCode(text)
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error('Error fetching code:', err)
      setCode('Not found')
    }
  }

  const refreshCode = async () => {
    setCode('')
    try {
      await fetch(getJsDelivrUrl(true), { cache: 'no-cache' })
      loadCode()
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error('Error refreshing code:', err)
      setCode('Not found')
    }
  }

  createEffect(() => {
    setCode('')
    loadCode()
  })

  return (
    <div class='code-container'>
      <Show when={code()} fallback={<pre class='code'>Loading...</pre>}>
        <pre class='code' data-lang='TSX'>
          <Show when={DEV}>
            <div>
              <button
                class='btn btn-plain btn-compact'
                onClick={refreshCode}
                aria-label='purge jsdelivr cache and reload code'
              >
                <FiRefreshCw />
              </button>
            </div>
          </Show>
          <code innerHTML={highlight(code(), languages.tsx, 'tsx')} />
        </pre>
      </Show>
    </div>
  )
}
