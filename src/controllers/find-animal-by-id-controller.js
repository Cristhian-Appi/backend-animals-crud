import { FindAnimalByIdService } from '../services/find-animal-by-id-service.js'

export class FindAnimalByIdController {
  async handle (data) {
    try {
      const findAnimalByIdService = new FindAnimalByIdService()
      const animal = await findAnimalByIdService.run(data.id)

      if (!animal) {
        return {
          statusCode: 404,
          data: { error: 'Animal not found' }
        }
      }

      return {
        statusCode: 200,
        data: animal
      }
    } catch (error) {
      return {
        statusCode: 500,
        data: { error: error.message }
      }
    }
  }
} 