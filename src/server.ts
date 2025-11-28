import { buildApplication } from './app'
import { applicationConfig } from './config/env'

async function startServer() {
  const server = buildApplication()
  try {
    await server.listen({
      port: Number(applicationConfig.port),
      host: '0.0.0.0',
    })
  } catch (error) {
    console.error('Failed to start server:', error)
    process.exit(1)
  }
}

startServer()
