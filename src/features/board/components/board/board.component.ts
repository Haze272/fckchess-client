import {Component, Input, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {BoardSchemaModel} from "../../model/board-schema.model";
import {BoardService} from "../../board.service";
import {Observable, Subject} from "rxjs";
import {SquareComponent} from "../square/square.component";
import {Piece} from "../../../../entitites/piece.model";
import {Move} from "../../model/move.model";
import {GameService} from "../../../../pages/game/game.service";

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [CommonModule, SquareComponent],
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit{
  //@Input() schema: BoardSchemaModel | undefined;
  selectedItem: { x: number; y: number } | undefined;

  constructor(
    private readonly boardService: BoardService,
    private readonly gameService: GameService,
  ) {
  }

  get schema$() {
    return this.boardService.currentSchema$;
  }

  ngOnInit() {
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

  onMoved($event: Move, x: number, y: number) {
    console.log('move:', $event);
    console.log('coordinate from:', x, y);
  }
}
