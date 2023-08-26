import {Component, Input, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {BoardSchemaModel} from "../../model/board-schema.model";
import {BoardService} from "../../board.service";
import {Observable, Subject} from "rxjs";
import {SquareComponent} from "../square/square.component";

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

  constructor(private boardService: BoardService) {
  }

  ngOnInit() {
    this.schema$ = this.boardService.getSchema();
  }
}
