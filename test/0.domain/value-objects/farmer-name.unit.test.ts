import FarmerName from '@/0.domain/value-objects/farmer-name'

type SutTypes = {
  sut: typeof FarmerName
}

const makeSut = (): SutTypes => {
  const sut = FarmerName

  return { sut }
}

describe('FarmerName', () => {
  describe('success', () => {
    it('returns a new FarmerName if input is valid', () => {
      const { sut } = makeSut()
      const input = 'John Doe'

      const result = sut.create(input)

      expect(result.value).toBeInstanceOf(FarmerName)
    })
  })

  describe('failure', () => {
    it('returns as least one error if input is invalid', () => {
      const { sut } = makeSut()
      const input = 'John'

      const result = sut.create(input)

      expect((result.value as any).length).toBeGreaterThanOrEqual(1)
    })
  })
})
