import type { Component } from 'solid-js'
import { MoodCanvas } from './MoodCanvas'
import type { Mood } from '../types/mood'

export interface MoodBoardProps {
  mood?: Mood | undefined
}
export const MoodBoard: Component<MoodBoardProps> = ({ mood }) => {
  return (
    <>
      <div class='flex'>
        <div class='w-16'></div>
        <div class='flex w-full items-center gap-4 px-4 py-2 text-center'>
          <p class='w-20'>Unpleasant</p>
          <div class='h-[2px] flex-1 bg-neutral-800 text-center'></div>
          <p class='w-20'>Pleasant</p>
        </div>
      </div>

      <div class='mt-2 flex gap-2'>
        <div class='flex w-16 flex-col items-center gap-2 p-2 text-center'>
          <p>High energy</p>
          <div class='w-[2px] flex-1 bg-neutral-800'></div>
          <p>Low energy</p>
        </div>
        <MoodCanvas mood={mood} />
      </div>
    </>
  )
}
