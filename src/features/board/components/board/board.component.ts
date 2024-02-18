import {Component, Input, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {BoardSchemaModel} from "../../model/board-schema.model";
import {BoardService} from "../../board.service";
import {Observable, Subject} from "rxjs";
import {SquareComponent} from "../square/square.component";
import {Piece} from "../../../../entitites/piece.model";

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [CommonModule, SquareComponent],
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit{
  //@Input() schema: BoardSchemaModel | undefined;
  schema$: Observable<BoardSchemaModel> | undefined;
  selectedItem: { x: number; y: number } | undefined;

  constructor(private boardService: BoardService) {
  }

  ngOnInit() {
    this.schema$ = this.boardService.getSchema();
  }

  selectItem(x: number, y: number) {
    this.selectedItem = {x: x, y: y};
  }

  isSelected(x: number, y: number) {
    if (
      this.selectedItem &&
      this.selectedItem.x == x &&
      this.selectedItem.y == y
    ) {
      return true;
    } else {
      return false;
    }
  }
}
