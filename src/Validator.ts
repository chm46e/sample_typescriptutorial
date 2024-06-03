//The following creates a new module called Validator.ts and declares an interface named Validator:
export interface Validator {
    isValid(s: string): boolean
}
// or export { Validator as StringValidator };