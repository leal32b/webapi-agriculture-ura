import MinLengthValidator from '@/0.domain/validators/min-length'

type SutTypes = {
  sut: MinLengthValidator
  minLength: number
}

const makeSut = (): SutTypes => {
  const injection = { minLength: 6 }
  const sut = new MinLengthValidator(injection)

  return { sut, ...injection }
}

describe('MinLengthValidator', () => {
  describe('success', () => {
    it('returns Right when input.length is greater than minLength', () => {
      const { sut } = makeSut()
      const field = 'any_field'
      const input = 'any_value'

      const result = sut.validate(field, input)

      expect(result.isRight()).toBeTruthy()
    })
  })
})
