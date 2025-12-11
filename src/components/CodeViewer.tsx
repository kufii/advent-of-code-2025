import { highlightElement } from 'prismjs'
import 'prismjs/components/prism-typescript'
import 'prismjs/components/prism-jsx'
import 'prismjs/components/prism-tsx'
import { createEffect, createSignal, DEV, Show } from 'solid-js'
import 'prismjs/themes/prism-okaidia.min.css'
import { FiRefreshCw } from 'solid-icons/fi'
import './CodeViewer.css'

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
      setTimeout(() => {
        const code = document.getElementById('code')
        if (code) highlightElement(code)
      }, 0)
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
          <code id='code' class='language-tsx'>
            {code()}
          </code>
        </pre>
      </Show>
    </div>
  )
}
