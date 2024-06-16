import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BoardComponent} from "../../features/board/components/board/board.component";

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule, BoardComponent],
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent {

}
