import { ChangeDetectionStrategy, Component } from '@angular/core';
import {DragDropModule} from "primeng/dragdrop";

interface Square {
  x: number;
  piece?: Piece;
}

interface Piece {
  name: string;
}

@Component({
  selector: 'app-sandbox-page',
  standalone: true,
  imports: [
    DragDropModule
  ],
  templateUrl: './sandbox-page.component.html',
  styleUrl: './sandbox-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SandboxPageComponent {
  draggedPiece: {piece: Piece, coordinate: number} | undefined;

  board: Square[] = [
    {
      x: 0,
      piece: {name: 'aboba'},
    },
    {
      x: 1
    },
    {
      x: 2
    },
    {
      x: 3
    },
    {
      x: 4
    },
    {
      x: 5
    },
    {
      x: 6
    },
    {
      x: 7
    },
    {
      x: 8
    },
  ];


  dragStart(piece: Piece, coordinate: number) {
    console.log('dragStart', piece, coordinate);
    this.draggedPiece = {piece, coordinate};
  }



  drop(coordinate: number) {
    console.log('drop', coordinate);
    if (this.draggedPiece) {

    }
  }

  dragEnd() {
    console.log('dragEnd');
    // this.draggedPiece = undefined;
  }
}
