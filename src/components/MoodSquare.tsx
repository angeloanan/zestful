import type { ParentComponent } from 'solid-js'
import '@fontsource/inter-tight/latin-400.css'

export interface MoodSquareProps {
  color: string
}

export const MoodSquare: ParentComponent<MoodSquareProps> = ({ color, children }) => (
  <p
    class={
      'flex aspect-square select-none items-center justify-center rounded-xl p-2 text-center opacity-60 ' +
      color
    }
  >
    {children}
  </p>
)
