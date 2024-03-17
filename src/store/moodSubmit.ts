import type { Mood } from '../types/mood'
import { persistentAtom } from '@nanostores/persistent'

export const proposedMoodStore = persistentAtom<Mood>(
  'proposedMood',
  {
    energy: 0,
    pleasantness: 0
  },
  {
    encode: JSON.stringify,
    decode: JSON.parse
  }
)
