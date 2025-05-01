import { ListAnimalsService } from '../services/list-animals-service.js'

export class ListAnimalsController {
    #listAnimalsService = new ListAnimalsService()

    async handle () {
        try {
            const animals = await this.#listAnimalsService.run()
            return {
                statusCode: 200,
                data: { animals }
            }
        } catch (error) {
            return {
                statusCode: 500,
                data: { error: error.message }
            }
        }
    }
}
