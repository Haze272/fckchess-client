import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BoardSchemaModel} from "./model/board-schema.model";
import {map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BoardService {

  constructor(private httpClient: HttpClient) {}

  getSchema(): Observable<BoardSchemaModel> {
    const schemaUrl: string = './assets/classicChessboard.json';
    // const schemaUrl: string = './assets/fourPlayersChessboard.json';

    return this.httpClient.get<BoardSchemaModel>(schemaUrl)
      .pipe<BoardSchemaModel>(
        map(x => {
          x.board = x.board.map(row => {
            return row.map((square) => {

              switch (square.color) {
                case "x":
                  square.color = 'rgba(0,0,0,0)'
                  break;
                case "b":
                  square.color = 'rgb(118,150,86)'
                  break;
                case "w":
                  square.color = 'rgb(238,238,210)'
                  break;
                default:
                  square.color = '#121211'
                  break;
              }
              return square;
            }) as [];
          })

          return x;
        })
      )
  }
}
