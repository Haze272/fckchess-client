import {Piece} from "../../../entitites/piece.model";

export type BoardSchemaModel = {
  board: Array<Array<SquareModel>>;
}

export type SquareModel = {
  color: string,
  piece: Piece | undefined
}
