import { MoodSquare } from './MoodSquare'
import type { Component } from 'solid-js'
import { lerp } from '../utils/lerp'

export interface MoodBoardProps {
  pleasantness?: number
  energy?: number
}
export const MoodBoard: Component<MoodBoardProps> = ({ pleasantness, energy }) => {
  const shouldShowPoint = pleasantness !== undefined && energy !== undefined
  const left = lerp(2, 96.5, pleasantness ?? 0)
  const bottom = lerp(2, 96.5, energy ?? 0)

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

        <div class='relative grid aspect-square w-full grid-cols-10 grid-rows-10 gap-1 rounded-3xl bg-neutral-200 p-3 text-center font-sansTight text-xs'>
          {shouldShowPoint && (
            <>
              <div
                class='absolute z-20 h-3 w-3 animate-ping rounded-full bg-neutral-800 opacity-75'
                style={{ left: left + '%', bottom: bottom + '%' }}
              />
              <div
                class='absolute z-10 h-3 w-3 rounded-full bg-neutral-800 outline outline-2 outline-neutral-100'
                style={{ left: left + '%', bottom: bottom + '%' }}
              />
            </>
          )}

          {/* 1st Row */}
          <MoodSquare color='bg-red-950 text-red-50'>Enraged</MoodSquare>
          <MoodSquare color='bg-red-900 text-red-50'>Panicked</MoodSquare>
          <MoodSquare color='bg-red-800 text-red-50'>Stressed</MoodSquare>
          <MoodSquare color='bg-red-700 text-red-50'>Jittery</MoodSquare>
          <MoodSquare color='bg-red-600 text-red-50'>Shocked</MoodSquare>
          <MoodSquare color='bg-yellow-600 text-yellow-50'>Surprised</MoodSquare>
          <MoodSquare color='bg-yellow-700 text-yellow-50'>Upbeat</MoodSquare>
          <MoodSquare color='bg-yellow-800 text-yellow-50'>Festive</MoodSquare>
          <MoodSquare color='bg-yellow-900 text-yellow-50'>Exhilarated</MoodSquare>
          <MoodSquare color='bg-yellow-950 text-yellow-50'>Ecstatic</MoodSquare>

          {/* 2nd Row */}
          <MoodSquare color='bg-red-900 text-red-50'>Livid</MoodSquare>
          <MoodSquare color='bg-red-800 text-red-50'>Furious</MoodSquare>
          <MoodSquare color='bg-red-700 text-red-50'>Frustrated</MoodSquare>
          <MoodSquare color='bg-red-600 text-red-50'>Tense</MoodSquare>
          <MoodSquare color='bg-red-500 text-red-50'>Stunned</MoodSquare>
          <MoodSquare color='bg-yellow-500 text-yellow-50'>Hyper</MoodSquare>
          <MoodSquare color='bg-yellow-600 text-yellow-50'>Cheerful</MoodSquare>
          <MoodSquare color='bg-yellow-700 text-yellow-50'>Motivated</MoodSquare>
          <MoodSquare color='bg-yellow-800 text-yellow-50'>Inspired</MoodSquare>
          <MoodSquare color='bg-yellow-900 text-yellow-50'>Elated</MoodSquare>

          {/* 3rd Row */}
          <MoodSquare color='bg-red-800 text-red-50'>Fuming</MoodSquare>
          <MoodSquare color='bg-red-700 text-red-50'>Frightened</MoodSquare>
          <MoodSquare color='bg-red-600 text-red-50'>Angry</MoodSquare>
          <MoodSquare color='bg-red-500 text-red-50'>Nervous</MoodSquare>
          <MoodSquare color='bg-red-400 text-red-900'>Restless</MoodSquare>
          <MoodSquare color='bg-yellow-400 text-yellow-900'>Energized</MoodSquare>
          <MoodSquare color='bg-yellow-500 text-yellow-50'>Lively</MoodSquare>
          <MoodSquare color='bg-yellow-600 text-yellow-50'>Enthusiastic</MoodSquare>
          <MoodSquare color='bg-yellow-700 text-yellow-50'>Optimistic</MoodSquare>
          <MoodSquare color='bg-yellow-800 text-yellow-50'>Excited</MoodSquare>

          {/* 4rd Row */}
          <MoodSquare color='bg-red-700 text-red-50'>Anxious</MoodSquare>
          <MoodSquare color='bg-red-600 text-red-50'>Apprehensive</MoodSquare>
          <MoodSquare color='bg-red-500 text-red-50'>Worried</MoodSquare>
          <MoodSquare color='bg-red-400 text-red-900'>Irritated</MoodSquare>
          <MoodSquare color='bg-red-300 text-red-900'>Annoyed</MoodSquare>
          <MoodSquare color='bg-yellow-300 text-yellow-900'>Pleased</MoodSquare>
          <MoodSquare color='bg-yellow-400 text-yellow-900'>Happy</MoodSquare>
          <MoodSquare color='bg-yellow-500 text-yellow-50'>Focused</MoodSquare>
          <MoodSquare color='bg-yellow-600 text-yellow-50'>Proud</MoodSquare>
          <MoodSquare color='bg-yellow-700 text-yellow-50'>Thrilled</MoodSquare>

          {/* 5th Row */}
          <MoodSquare color='bg-red-600 text-red-50'>Repulsed</MoodSquare>
          <MoodSquare color='bg-red-500 text-red-50'>Troubled</MoodSquare>
          <MoodSquare color='bg-red-400 text-red-900'>Concerned</MoodSquare>
          <MoodSquare color='bg-red-300 text-red-900'>Uneasy</MoodSquare>
          <MoodSquare color='bg-red-200 text-red-900'>Peeved</MoodSquare>
          <MoodSquare color='bg-yellow-200 text-yellow-900'>Pleasant</MoodSquare>
          <MoodSquare color='bg-yellow-300 text-yellow-900'>Joyful</MoodSquare>
          <MoodSquare color='bg-yellow-400 text-yellow-900'>Hopeful</MoodSquare>
          <MoodSquare color='bg-yellow-500 text-yellow-50'>Playful</MoodSquare>
          <MoodSquare color='bg-yellow-600 text-yellow-50'>Blissful</MoodSquare>

          {/* 6th Row */}
          <MoodSquare color='bg-blue-600 text-blue-50'>Disgusted</MoodSquare>
          <MoodSquare color='bg-blue-500 text-blue-50'>Glum</MoodSquare>
          <MoodSquare color='bg-blue-400 text-blue-900'>Disappointed</MoodSquare>
          <MoodSquare color='bg-blue-300 text-blue-900'>Down</MoodSquare>
          <MoodSquare color='bg-blue-200 text-blue-900'>Apathetic</MoodSquare>
          <MoodSquare color='bg-green-200 text-green-900'>At ease</MoodSquare>
          <MoodSquare color='bg-green-300 text-green-900'>Easygoing</MoodSquare>
          <MoodSquare color='bg-green-400 text-green-900'>Content</MoodSquare>
          <MoodSquare color='bg-green-500 text-green-50'>Loving</MoodSquare>
          <MoodSquare color='bg-green-600 text-green-50'>Fulfilled</MoodSquare>

          {/* 7th Row */}
          <MoodSquare color='bg-blue-700 text-blue-50'>Pessimistic</MoodSquare>
          <MoodSquare color='bg-blue-600 text-blue-50'>Morose</MoodSquare>
          <MoodSquare color='bg-blue-500 text-blue-50'>Discouraged</MoodSquare>
          <MoodSquare color='bg-blue-400 text-blue-900'>Sad</MoodSquare>
          <MoodSquare color='bg-blue-300 text-blue-900'>Bored</MoodSquare>
          <MoodSquare color='bg-green-300 text-green-900'>Calm</MoodSquare>
          <MoodSquare color='bg-green-400 text-green-900'>Secure</MoodSquare>
          <MoodSquare color='bg-green-500 text-green-50'>Satisfied</MoodSquare>
          <MoodSquare color='bg-green-600 text-green-50'>Grateful</MoodSquare>
          <MoodSquare color='bg-green-700 text-green-50'>Touched</MoodSquare>

          {/* 8th Row */}
          <MoodSquare color='bg-blue-800 text-blue-50'>Alienated</MoodSquare>
          <MoodSquare color='bg-blue-700 text-blue-50'>Miserable</MoodSquare>
          <MoodSquare color='bg-blue-600 text-blue-50'>Lonely</MoodSquare>
          <MoodSquare color='bg-blue-500 text-blue-50'>Disheartened</MoodSquare>
          <MoodSquare color='bg-blue-400 text-blue-900'>Tired</MoodSquare>
          <MoodSquare color='bg-green-400 text-green-900'>Relaxed</MoodSquare>
          <MoodSquare color='bg-green-500 text-green-50'>Chill</MoodSquare>
          <MoodSquare color='bg-green-600 text-green-50'>Restful</MoodSquare>
          <MoodSquare color='bg-green-700 text-green-50'>Blessed</MoodSquare>
          <MoodSquare color='bg-green-800 text-green-50'>Balanced</MoodSquare>

          {/* 9th Row */}
          <MoodSquare color='bg-blue-900 text-blue-50'>Despondent</MoodSquare>
          <MoodSquare color='bg-blue-800 text-blue-50'>Depressed</MoodSquare>
          <MoodSquare color='bg-blue-700 text-blue-50'>Sullen</MoodSquare>
          <MoodSquare color='bg-blue-600 text-blue-50'>Exhausted</MoodSquare>
          <MoodSquare color='bg-blue-500 text-blue-50'>Fatigued</MoodSquare>
          <MoodSquare color='bg-green-500 text-green-50'>Mellow</MoodSquare>
          <MoodSquare color='bg-green-600 text-green-50'>Thoughtful</MoodSquare>
          <MoodSquare color='bg-green-700 text-green-50'>Peaceful</MoodSquare>
          <MoodSquare color='bg-green-800 text-green-50'>Comfy</MoodSquare>
          <MoodSquare color='bg-green-900 text-green-50'>Carefree</MoodSquare>

          {/* 10th Row */}
          <MoodSquare color='bg-blue-950 text-blue-50'>Despairing</MoodSquare>
          <MoodSquare color='bg-blue-900 text-blue-50'>Hopeless</MoodSquare>
          <MoodSquare color='bg-blue-800 text-blue-50'>Desolate</MoodSquare>
          <MoodSquare color='bg-blue-700 text-blue-50'>Spent</MoodSquare>
          <MoodSquare color='bg-blue-600 text-blue-50'>Drained</MoodSquare>
          <MoodSquare color='bg-green-600 text-green-50'>Sleepy</MoodSquare>
          <MoodSquare color='bg-green-700 text-green-50'>Complacent</MoodSquare>
          <MoodSquare color='bg-green-800 text-green-50'>Tranquil</MoodSquare>
          <MoodSquare color='bg-green-900 text-green-50'>Cozy</MoodSquare>
          <MoodSquare color='bg-green-950 text-green-50'>Serene</MoodSquare>
        </div>
      </div>
    </>
  )
}
