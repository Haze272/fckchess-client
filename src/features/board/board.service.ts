import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BoardSchemaModel} from "./model/board-schema.model";
import {map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BoardService {

  constructor(private httpClient: HttpClient) {

  }

  getSchema(): Observable<BoardSchemaModel> {

    return this.httpClient.get<BoardSchemaModel>('./assets/classicChessboard.json')
      .pipe<BoardSchemaModel>(
        map(x => {
          x.board = x.board.map(row => {
             return row.map((square) => {
              let resultColor: string = '';

              switch (square) {
                case "x":
                  resultColor = 'rgba(0,0,0,0)'
                  break;
                case "b":
                  resultColor = 'rgb(27,72,0)'
                  break;
                case "w":
                  resultColor = 'rgb(255,255,255)'
                  break;
                default:
                  resultColor = '#121211'
                  break;
              }
              return resultColor;
            }) as [];
          })
          
          return x;
        })
      )
  }
}
