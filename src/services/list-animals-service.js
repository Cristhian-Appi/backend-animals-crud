import { AnimalsRepository } from '../repositories/animals-repository.js'

export class ListAnimalsService {
    #animalsRepository = new AnimalsRepository()

    async run () {
        return await this.#animalsRepository.findAll()
    }
}
