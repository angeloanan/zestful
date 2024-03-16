import { defineDb, defineTable, column, NOW } from 'astro:db'

export const Mood = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    energy: column.number({}),
    pleasantness: column.number({}),
    timestamp: column.date({ default: NOW })
  }
})

// https://astro.build/db/config
export default defineDb({
  tables: { Mood }
})
