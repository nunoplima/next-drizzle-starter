import '@/drizzle/envConfig'
import { defineConfig } from 'drizzle-kit'

const dbUrl = process.env.POSTGRES_URL
if (!dbUrl) throw new Error('POSTGRES_URL not set')

export default defineConfig({
  schema: './drizzle/schema.ts',
  dialect: 'postgresql',
  dbCredentials: {
    url: dbUrl,
  },
  verbose: true,
  strict: true,
})
