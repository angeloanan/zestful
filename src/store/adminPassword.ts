import { persistentAtom } from '@nanostores/persistent'

export const passwordStore = persistentAtom<string>('admin_password', '')
