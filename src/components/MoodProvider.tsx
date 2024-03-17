import { Match, Switch, createResource, type Component } from 'solid-js'
import { MoodBoard } from './MoodBoard'
import type { MoodWithTimestamp } from '../types/mood'

const BASE_URL = import.meta.env.SITE
const fetchUrl = new URL('api/mood', BASE_URL)

export const MoodProvider: Component = () => {
  const [mood] = createResource<MoodWithTimestamp>(() => fetch(fetchUrl).then((res) => res.json()))

  return (
    <>
      <p class='mt-2 font-light'>
        Last updated{' '}
        {mood.loading ? (
          <span class='inline-block h-3 w-32 animate-pulse rounded bg-neutral-400' />
        ) : (
          <span class='font-medium'>{new Date(mood()!.timestamp).toString()}</span>
        )}
      </p>

      <Switch>
        <Match when={mood.loading}>
          <MoodBoard />
        </Match>
        <Match when={mood.error}>
          <p class='mt-2 text-center'>Error: {mood.error.message}</p>
        </Match>
        <Match when={mood()}>{(mood) => <MoodBoard mood={mood()} />}</Match>
      </Switch>
    </>
  )
}
