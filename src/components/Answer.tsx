import { FiClipboard } from 'solid-icons/fi'
import './Answer.css'

interface Props {
  children: string | number
}

export default function Answer(props: Props) {
  return (
    <span class='answer-container'>
      <strong>{props.children}</strong>
      <button
        type='button'
        class='btn btn-compact'
        onClick={() =>
          navigator.clipboard?.writeText(props.children.toString())
        }
      >
        <FiClipboard size={24} />
      </button>
    </span>
  )
}
