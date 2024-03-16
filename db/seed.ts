import { Mood, db } from 'astro:db'

// https://astro.build/db/seed
export default async function seed() {
  await db.insert(Mood).values({ energy: 0, pleasantness: 0 })
}
