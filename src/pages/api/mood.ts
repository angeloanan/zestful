import type { APIRoute } from 'astro'
import { Mood, db, desc } from 'astro:db'
import { Type } from '@sinclair/typebox'
import { TypeCompiler } from '@sinclair/typebox/compiler'

export const prerender = false

export const getLatestMoodQuery = db
  .select({ energy: Mood.energy, pleasantness: Mood.pleasantness, timestamp: Mood.timestamp })
  .from(Mood)
  .limit(1)
  .orderBy(desc(Mood.timestamp))
  .prepare()

/**
 * Get the latest mood
 */
export const GET: APIRoute = async () => {
  const mood = await getLatestMoodQuery.execute()

  return new Response(
    JSON.stringify({
      timestamp: mood[0]?.timestamp.getTime(),
      energy: mood[0]?.energy,
      pleasantness: mood[0]?.pleasantness
    })
  )
}

const UpdateLatestMoodSchema = Type.Object({
  password: Type.String(),
  energy: Type.Number({ minimum: -1, maximum: 1 }),
  pleasantness: Type.Number({ minimum: -1, maximum: 1 })
})
const UpdateLatestMoodValidator = TypeCompiler.Compile(UpdateLatestMoodSchema)
/**
 * Update the latest mood
 */
export const POST: APIRoute = async ({ request }) => {
  const body = await request.json()
  const bodyValidateError = UpdateLatestMoodValidator.Errors(body).First()
  if (bodyValidateError) {
    return new Response(JSON.stringify(bodyValidateError), { status: 400 })
  }
  if (body.password !== import.meta.env.ADMIN_PASSWORD) {
    return new Response('Invalid password', { status: 401 })
  }

  await db
    .insert(Mood)
    .values({
      energy: body.energy,
      pleasantness: body.pleasantness
    })
    .execute()

  return new Response()
}
