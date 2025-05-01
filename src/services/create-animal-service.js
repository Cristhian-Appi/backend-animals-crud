import { Animal } from '../models/animal.js'
import { AnimalsRepository } from '../repositories/animals-repository.js'

export class CreateAnimalService {
    #animalsRepository = new AnimalsRepository()

    async run (data) {
        const animal = new Animal({
            id: undefined,
            birthdate: data.birthdate,
            gender: data.gender,
            name: data.name,
            species: data.species,
            weight: data.weight,
        })

        await this.#animalsRepository.create(animal)
    }
}
