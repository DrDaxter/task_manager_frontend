import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { BoardCrearService, Project } from './service/board-crear.service';
import { FormsModule } from '@angular/forms';
import { LoaderService } from '../../services/loader.service';

@Component({
  selector: 'app-board-crear-module',
  templateUrl: './board-crear-module.component.html',
  styleUrls: ['./board-crear-module.component.css'],
  imports: [CommonModule,
    FormsModule],
})
export class BoardCrearModuleComponent implements OnInit {
  visible = false;
  projectName = '';
  description = '';

  constructor(private BoardCrear: BoardCrearService, private loader: LoaderService) { }

  ngOnInit() {
  }

  abrir() {
    this.visible = true;
  }

  cerrar() {
    this.visible = false;
  }
  guardar() {
    this.loader.show();
    const nuevoProyecto: Project = {
      projectName: this.projectName,
      description: this.description,
      userId: 1
    };

    this.BoardCrear.createProject(nuevoProyecto).subscribe(
      res => {
        console.log(res);
        this.cerrar();
        this.loader.hide();
        this.reload();
      });

  }

  reload() {
    setTimeout(() => {
      this.refreshPage();
    }, 500); // Ajusta el tiempo según sea necesario
  }

  refreshPage() {
    window.location.reload();
  }
}
