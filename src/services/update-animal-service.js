import { Animal } from '../models/animal.js'
import { AnimalsRepository } from '../repositories/animals-repository.js'
import { AnimalNotFoundError } from '../errors/animal-not-found-error.js'

export class UpdateAnimalService {
    #animalsRepository = new AnimalsRepository()

    async run (id, data) {
        const existingAnimal = await this.#animalsRepository.findById(id)
        
        if (!existingAnimal) {
            throw new AnimalNotFoundError()
        }

        const animal = new Animal({
            id,
            name: data.name,
            species: data.species,
            birthdate: data.birthdate,
            weight: data.weight,
            gender: data.gender
        })

        await this.#animalsRepository.update(id, animal)
    }
} 