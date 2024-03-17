import { createSignal, onMount } from 'solid-js'
import { MoodCanvas } from './MoodCanvas'
import { proposedMoodStore } from '../store/moodSubmit'
import { useStore } from '@nanostores/solid'

export const MoodEntry = () => {
  let canvasRef!: HTMLDivElement
  const proposedMood = useStore(proposedMoodStore)
  const [isClicking, setIsClicking] = createSignal(false)

  const canvasTouchHandler = (e: TouchEvent) => {
    e.preventDefault()
    const primaryTouch = e.touches[0]!
    const boundingRect = canvasRef.getBoundingClientRect()
    const percentageX = (primaryTouch.pageX - boundingRect.x) / boundingRect.width
    const percentageY = (primaryTouch.pageY - boundingRect.y) / boundingRect.height

    proposedMoodStore.set({
      pleasantness: Math.max(-1, Math.min(1, percentageX * 2 - 1)),
      energy: Math.max(-1, Math.min(1, (1 - percentageY) * 2 - 1))
    })
  }

  const canvasMouseHandler = (e: MouseEvent) => {
    e.stopPropagation()
    const boundingRect = canvasRef.getBoundingClientRect()
    const percentageX = (e.x - boundingRect.x) / boundingRect.width
    const percentageY = (e.y - boundingRect.y) / boundingRect.height

    proposedMoodStore.set({
      pleasantness: percentageX * 2 - 1,
      energy: (1 - percentageY) * 2 - 1
    })
  }

  onMount(() => {
    canvasRef.onmousedown = (e) => {
      canvasMouseHandler(e)
      setIsClicking(true)
    }
    canvasRef.ontouchstart = (e) => {
      canvasTouchHandler(e)
      setIsClicking(true)
    }
    canvasRef.onmousemove = (e) => {
      isClicking() && canvasMouseHandler(e)
    }
    canvasRef.ontouchmove = (e) => {
      isClicking() && canvasTouchHandler(e)
    }
    canvasRef.onmouseup = () => {
      setIsClicking(false)
    }
    canvasRef.ontouchend = () => {
      setIsClicking(false)
    }
  })

  return (
    <div class='relative'>
      <MoodCanvas ref={canvasRef} />
      <div
        class='absolute h-3 w-3 rounded-full bg-red-500'
        style={{
          left: (proposedMood().pleasantness + 1) * 50 + '%',
          bottom: (proposedMood().energy + 1) * 50 + '%'
        }}
      ></div>
    </div>
  )
}
