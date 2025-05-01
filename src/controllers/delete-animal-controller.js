import { DeleteAnimalService } from '../services/delete-animal-service.js'
import { AnimalNotFoundError } from '../errors/animal-not-found-error.js'

export class DeleteAnimalController {
    #deleteAnimalService = new DeleteAnimalService()

    async handle (requestData) {
        try {
            await this.#deleteAnimalService.run(requestData.id)

            return {
                statusCode: 204,
                data: null
            }
        } catch (error) {
            if (error instanceof AnimalNotFoundError) {
                return {
                    statusCode: 404,
                    data: { error: error.message }
                }
            }

            return {
                statusCode: 500,
                data: { error: error.message }
            }
        }
    }
} 