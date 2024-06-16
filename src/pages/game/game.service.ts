import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BoardService} from "../../features/board/board.service";
import {map, of, tap} from "rxjs";
import {BoardSchemaModel} from "../../features/board/model/board-schema.model";

@Injectable({
  providedIn: 'root'
})
export class GameService {
  turn: number | undefined;

  constructor(
    private readonly boardService: BoardService,
  ) {
  }

  initiateGame() {
    return this.boardService.currentSchema$
      .pipe(
        tap(schema => {
          this.summonClassical(schema);
          console.log(schema.board)
        }),
      );
  }

  summonClassical(board: BoardSchemaModel) {
    board.board[0][0].piece = {
      name: 'bishop',
      code: 'b',
      imgSrc: '/assets/img/pieces/Chess_bdt60.png'
    }
    // for (let i = 0; i < board.board.length; i++) {
    //   for (let j = 0; j < board.board[i].length; j++) {
    //
    //   }
    // }
  }

  move() {
    
  }
}
