import { useStore } from '@nanostores/solid'
import { proposedMoodStore } from '../store/moodSubmit'
import { createSignal } from 'solid-js'
import { passwordStore } from '../store/adminPassword'

export const MoodSubmitButton = () => {
  const proposedMood = useStore(proposedMoodStore)
  const password = useStore(passwordStore)

  const [isSubmitting, setIsSubmitting] = createSignal(false)

  const submitMood = async () => {
    setIsSubmitting(true)
    await fetch('/api/mood', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        pleasantness: proposedMood().pleasantness,
        energy: proposedMood().energy,
        password: password()
      })
    })
    setIsSubmitting(false)
  }

  return (
    // <button class='ml-2 rounded-md bg-neutral-600 px-4 py-2 text-white'>Submit</button>
    <button
      class='ml-2 rounded-md bg-neutral-600 px-4 py-2 text-white'
      disabled={isSubmitting()}
      onClick={submitMood}
    >
      {isSubmitting() ? 'Submitting...' : 'Submit'}
    </button>
  )
}
