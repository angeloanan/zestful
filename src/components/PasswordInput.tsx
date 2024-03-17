import { useStore } from '@nanostores/solid'
import { passwordStore } from '../store/adminPassword'
import type { JSX } from 'solid-js/jsx-runtime'
import { onMount } from 'solid-js'

const updatePassword: JSX.InputEventHandlerUnion<HTMLInputElement, InputEvent> = (e) => {
  passwordStore.set(e.currentTarget.value)
}

export const PasswordInput = () => {
  let passwordInputRef!: HTMLInputElement
  const password = useStore(passwordStore)

  onMount(() => {
    passwordInputRef.value = password()
  })

  return (
    <input
      type='password'
      class='mt-2 w-full rounded-md border border-neutral-300 p-2'
      ref={passwordInputRef}
      value={password()}
      onInput={updatePassword}
    />
  )
}
