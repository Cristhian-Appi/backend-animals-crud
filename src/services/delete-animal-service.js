import { AnimalsRepository } from '../repositories/animals-repository.js'
import { AnimalNotFoundError } from '../errors/animal-not-found-error.js'

export class DeleteAnimalService {
    #animalsRepository = new AnimalsRepository()

    async run (id) {
        const animal = await this.#animalsRepository.findById(id)
        
        if (!animal) {
            throw new AnimalNotFoundError()
        }

        await this.#animalsRepository.delete(id)
    }
} 