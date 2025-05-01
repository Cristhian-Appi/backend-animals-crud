import { UpdateAnimalService } from '../services/update-animal-service.js'
import { AnimalNotFoundError } from '../errors/animal-not-found-error.js'

export class UpdateAnimalController {
    #updateAnimalService = new UpdateAnimalService()

    async handle (requestData) {
        const { id, ...data } = this.#extractData(requestData)

        try {
            await this.#updateAnimalService.run(id, data)

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

    #extractData (requestData) {
        return {
            id: requestData.id,
            name: requestData.name,
            species: requestData.species,
            birthdate: requestData.birthdate,
            weight: requestData.weight,
            gender: requestData.gender
        }
    }
} 