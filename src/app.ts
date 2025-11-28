import fastify from 'fastify'
import { healthRoutes } from './routes/health.route'
import { applicationConfig } from './config/env'

export function buildApplication() {
  const logger =
    applicationConfig.nodeEnv === 'development'
      ? {
          transport: {
            target: 'pino-pretty',
            options: {
              colorize: true,
              translateTime: 'HH:MM:ss',
              ignore: 'pid,hostname',
            },
          },
        }
      : true
  const server = fastify({ logger })
  server.register(healthRoutes)
  return server
}
