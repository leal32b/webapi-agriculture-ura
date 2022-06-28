import DomainError from '@/0.domain/base/domain-error'
import ValueObject from '@/0.domain/base/value-object'
import { Either, left, right } from '@/0.domain/utils/either'
import MinLengthValidator from '@/0.domain/validators/min-length'

export default class FarmerName extends ValueObject {
  private constructor (readonly value: string) {
    super()
  }

  static create (input: string): Either<DomainError[], FarmerName> {
    const trueOrError = this.validate(input, [
      new MinLengthValidator({ minLength: 6 })
    ])

    if (trueOrError.isLeft()) {
      return left(trueOrError.value)
    }

    return right(new FarmerName(input))
  }
}
