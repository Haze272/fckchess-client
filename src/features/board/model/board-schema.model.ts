export type BoardSchemaModel = {
  board: Array<Array<SquareModel>>;
}

export type SquareModel = {
  color: string,
  piece: string
}
