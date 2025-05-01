import Fastify from 'fastify'
import { Router } from './router.js'
import dotenv from 'dotenv'

dotenv.config()

const fastify = Fastify({ logger: true })
const router = new Router(fastify)
router.setupRoutes()
fastify.listen({ port: process.env.PORT || 3000 })
