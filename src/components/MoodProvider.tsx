import { createResource, type Component } from 'solid-js'
import { MoodBoard } from './MoodBoard'

// export const prerender = false
const BASE_URL = import.meta.env.SITE
const fetchUrl = new URL('api/mood', BASE_URL)

export const MoodProvider: Component = () => {
  const [mood] = createResource(() => fetch(fetchUrl).then((res) => res.json()))

  return (
    <>
      <p class='mt-2 font-light'>
        Last updated{' '}
        {mood.loading ? (
          <span class='inline-block h-3 w-32 animate-pulse rounded bg-neutral-400' />
        ) : (
          <span class='font-medium'>{new Date(mood()?.timestamp).toString()}</span>
        )}
      </p>

      {mood.loading ? (
        <MoodBoard />
      ) : (
        <MoodBoard
          energy={(mood()?.energy + 1) / 2}
          pleasantness={(mood()?.pleasantness + 1) / 2}
        />
      )}
    </>
  )
}
