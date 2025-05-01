import { PrismaClient } from '@prisma/client'
import { Animal } from '../models/Animal.js'

const prisma = new PrismaClient()

export class AnimalsRepository {
  #mapToAnimal(prismaAnimal) {
    if (!prismaAnimal) return null

    return new Animal({
      id: prismaAnimal.id,
      name: prismaAnimal.name,
      species: prismaAnimal.species,
      birthdate: prismaAnimal.birthdate,
      weight: prismaAnimal.weight,
      gender: prismaAnimal.gender
    })
  }

  async create (animalData) {
    const prismaAnimal = await prisma.animal.create({ data: animalData })

    return this.#mapToAnimal(prismaAnimal)
  }

  async findAll () {
    const prismaAnimals = await prisma.animal.findMany()

    return prismaAnimals.map(animal => this.#mapToAnimal(animal))
  }

  async findById (id) {
    const prismaAnimal = await prisma.animal.findUnique({ where: { id } })

    return this.#mapToAnimal(prismaAnimal)
  }

  async update (id, data) {
    const prismaAnimal = await prisma.animal.update({
      where: { id },
      data
    })

    return this.#mapToAnimal(prismaAnimal)
  }

  async delete (id) {
    const prismaAnimal = await prisma.animal.delete({ where: { id } })

    return this.#mapToAnimal(prismaAnimal)
  }
}
