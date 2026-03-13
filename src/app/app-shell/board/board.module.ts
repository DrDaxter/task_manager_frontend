import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardComponent } from './board-component/board.component';


@NgModule({
  imports: [CommonModule, BoardComponent],
  exports: [BoardComponent]
})
export class BoardModule { }
