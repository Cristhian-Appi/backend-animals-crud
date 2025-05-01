import { CreateAnimalService } from '../services/create-animal-service.js'

export class CreateAnimalController {
    #createAnimalService = new CreateAnimalService()

    async handle (requestData) {
        const data = this.#extractData(requestData)

        try {
            await this.#createAnimalService.run(data)

            return {
                statusCode: 201,
                data: { message: 'Animal created successfully' }
            }
        } catch (error) {
            return {
                statusCode: 500,
                data: { error: error.message }
            }
        }
    }

    #extractData (requestData) {
        return {
            birthdate: requestData.birthdate,
            gender: requestData.gender,
            name: requestData.name,
            species: requestData.species,
            weight: requestData.weight
        }
    }
}
