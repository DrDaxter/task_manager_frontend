import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BoardCrearModuleComponent } from './board-crear-module/board-crear-module.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BoardCrearModuleComponent
  ],
  exports: [BoardCrearModuleComponent]
})
export class ModalsModule { }
