export class InvalidValueError extends Error {
    constructor (field) {
        super(`Invalid value for field '${field}'`)
        this.name = 'InvalidValueError'
    }
}
