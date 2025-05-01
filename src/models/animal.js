import { InvalidValueError } from '../errors/invalid-value-error.js'

export class Animal {
    id
    name
    species
    birthdate
    weight
    gender

    constructor({
        id,
        name,
        species,
        birthdate,
        weight,
        gender
    }) {
        this.id = id
        this.name = name
        this.species = species
        this.birthdate = birthdate
        this.weight = weight
        this.gender = gender
    }

    #validateGender (gender) {
        const VALID_GENDERS = ['male', 'female']

        if (!VALID_GENDERS.includes(gender)) {
            throw new InvalidValueError('gender')
        }
    }
}
