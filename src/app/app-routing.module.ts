import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoardComponent } from './app-shell/board/board-component/board.component';

export const routes: Routes = [
  { path: 'dashboard', component: BoardComponent }, // 👈 agregas esta ruta
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }, // opcional: redirige a dashboard
  { path: '**', redirectTo: '/dashboard' } // opcional: ruta por defecto
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
