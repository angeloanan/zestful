import { useStore } from '@nanostores/solid'
import { proposedMoodStore } from '../store/moodSubmit'
import { createMemo } from 'solid-js'

const NumberFormatter = new Intl.NumberFormat('en-US', {
  signDisplay: 'exceptZero',
  maximumFractionDigits: 3,
  minimumFractionDigits: 3
})

export const ProposedMoodViewer = () => {
  const data = useStore(proposedMoodStore)

  const pleasant = createMemo(() => NumberFormatter.format(data().pleasantness))
  const energy = createMemo(() => NumberFormatter.format(data().energy))

  return (
    <p class='tabular-nums'>
      Pleasant: {pleasant()}, Energy: {energy()}
    </p>
  )
}
