import { AnimalsRepository } from '../repositories/animals-repository.js'

export class FindAnimalByIdService {
    #animalsRepository = new AnimalsRepository()

    async run (id) {
        return await this.#animalsRepository.findById(id)
    }
} 