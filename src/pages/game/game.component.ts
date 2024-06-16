import {Component, OnDestroy, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {BoardComponent} from "../../features/board/components/board/board.component";
import {Button} from "primeng/button";
import {CardModule} from "primeng/card";
import {BoardService} from "../../features/board/board.service";
import {MessageService} from "primeng/api";
import {GameService} from "./game.service";
import {Subject, takeUntil, tap} from "rxjs";

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule, BoardComponent, Button, CardModule],
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();

  constructor(
    private readonly messageService: MessageService,
    private readonly boardService: BoardService,
    private readonly gameService: GameService,
  ) {
  }

  ngOnInit(): void {
    this.boardService.getClassicSchema()
      .pipe(takeUntil(this.destroy$))
      .subscribe(schema => {
        this.boardService.currentSchema$.next(schema)
      });
  }

  spawnClassical() {
    this.gameService.initiateGame()
      .pipe(
        takeUntil(this.destroy$),
      )
      .subscribe(_ => {
        this.messageService.add({
          severity: 'success',
          summary: 'Успешно',
          detail: 'Игра была создана'
        });
      });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
