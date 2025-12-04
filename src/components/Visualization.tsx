import { FiEye, FiEyeOff } from 'solid-icons/fi'
import { Match, ResolvedChildren, Show, Switch } from 'solid-js'
import './Visualization.css'

interface Props {
  show: boolean
  setShow: (next: boolean | ((prev: boolean) => boolean)) => void
  children: ResolvedChildren
}

export default function Visualization(props: Props) {
  return (
    <>
      <button
        type='button'
        class='btn btn-compact'
        onClick={() => props.setShow((prev) => !prev)}
      >
        <Switch>
          <Match when={props.show}>
            <FiEyeOff />
          </Match>
          <Match when={!props.show}>
            <FiEye />
          </Match>
        </Switch>
        {props.show ? 'Hide' : 'Show'} Visualization
      </button>
      <Show when={props.show}>
        <pre class='visualization'>{props.children}</pre>
      </Show>
    </>
  )
}
