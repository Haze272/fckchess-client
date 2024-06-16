import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Piece} from "../../../../entitites/piece.model";
import {DragDropModule} from "primeng/dragdrop";
import {Move} from "../../model/move.model";

@Component({
  selector: 'app-square',
  standalone: true,
  imports: [CommonModule, DragDropModule],
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SquareComponent {
  @Input() color: string | undefined;
  @Input() piece: Piece | undefined;
  @Input() disabled: boolean = false;
  @Input() selected: boolean = false;

  @Output() onSelected = new EventEmitter<void>();
  @Output() onMoved = new EventEmitter<Move>();

  draggedPiece: Piece | undefined;

  select() {
    this.onSelected.emit();
  }

  getStateColor() {
    if (this.selected) {
      return 'rgba(76,113,213,0.9)';
    } else {
      return '#00000000';
    }
  }

  dragStart(piece: Piece): void {
    console.log('dragStart')
    this.draggedPiece = piece;
  }

  drop() {
    console.log('drop')
    if (this.draggedPiece) {
      this.onMoved.emit({
        piece: this.draggedPiece
      })
      this.draggedPiece = undefined;
    }
  }

  dragEnd() {
    this.draggedPiece = undefined;
  }

}
