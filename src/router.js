import { CreateAnimalController } from './controllers/create-animal-controller.js'
import { ListAnimalsController } from './controllers/list-animals-controller.js'
import { UpdateAnimalController } from './controllers/update-animal-controller.js'
import { DeleteAnimalController } from './controllers/delete-animal-controller.js'
import { FindAnimalByIdController } from './controllers/find-animal-by-id-controller.js'

export class Router {
    #fastiy

    constructor (fastify) {
        this.#fastiy = fastify
    }

    setupRoutes () {
        this.#fastiy.route({
            method: 'POST',
            url: '/animals',
            handler: this.#adaptController(new CreateAnimalController())
        })

        this.#fastiy.route({
            method: 'GET',
            url: '/animals',
            handler: this.#adaptController(new ListAnimalsController())
        })

        this.#fastiy.route({
            method: 'GET',
            url: '/animals/:id',
            handler: this.#adaptController(new FindAnimalByIdController())
        })

        this.#fastiy.route({
            method: 'PUT',
            url: '/animals/:id',
            handler: this.#adaptController(new UpdateAnimalController())
        })

        this.#fastiy.route({
            method: 'DELETE',
            url: '/animals/:id',
            handler: this.#adaptController(new DeleteAnimalController())
        })
    }

    #adaptController (controller) {
        return async (request, reply) => {
            const { body, query, params } = request
            const data = { ...body, ...query, ...params }
            const response = await controller.handle(data)
            reply.status(response.statusCode).send(response.data)
        }
    }
}
