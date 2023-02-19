export interface IStatedEntity {
  id: number
  state: string
}

export interface IRendererComponent<TEntity extends any> {
  data: TEntity
}

