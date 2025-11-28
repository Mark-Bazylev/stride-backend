import dotenv from 'dotenv'

dotenv.config()

export const applicationConfig = {
  port: process.env.PORT || '3000',
  databaseUrl: process.env.DATABASE_URL || '',
  nodeEnv: process.env.NODE_ENV || 'development',
}
