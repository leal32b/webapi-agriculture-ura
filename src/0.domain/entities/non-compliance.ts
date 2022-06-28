import DomainError from '@/0.domain/base/domain-error'
import Entity from '@/0.domain/base/entity'
import { Either } from '@/0.domain/utils/either'
import FarmerName from '@/0.domain/value-objects/farmer-name'

type ConstructParams = {
  farmerName: FarmerName
}

export type CreateParams = {
  farmerName: string
  id?: string
}

export default class NonCompliance extends Entity<ConstructParams> {
  private constructor (props: ConstructParams, id?: string) {
    super(props, id)
  }

  static create (params: CreateParams): Either<DomainError[], NonCompliance> {
    const { farmerName, id } = params

    const constructParamsOrError = this.validateParams<ConstructParams>({
      farmerName: FarmerName.create(farmerName)
    })

    return constructParamsOrError.applyOnRight(value => new NonCompliance(value, id))
  }
}
