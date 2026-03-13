import { AfterViewInit, Component, OnInit, ViewChild, viewChild } from '@angular/core';
import { LoaderService } from '../../services/loader.service';
import { BoardService } from '../service/board.service';
import { CommonModule } from '@angular/common';
import { BoardCrearModuleComponent } from '../../modal/board-crear-module/board-crear-module.component';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
  imports: [CommonModule, BoardCrearModuleComponent]
})
export class BoardComponent implements OnInit  {
  constructor(
    private loader: LoaderService,
    private boardService: BoardService
  ) { }

@ViewChild('modalCrear') modalCrear!: BoardCrearModuleComponent;

  cartas: any[] = [];
  loading = true;

  ngOnInit(): void {
    this.loadCards();
  }

  loadCards() {
    this.loader.show();
    this.boardService.getCards().subscribe(data => {
      this.cartas = data.map(item => ({
        id: item.id,
        titulo: item.title,
        projectName: item.projectName,
        description: item.description,
        imagen: `https://picsum.photos/300/200?random=${Math.floor(Math.random() * 1000)}`
      }));
      this.loader.hide();
    });
  }

  onCardClick(card: any) {
    alert(`Has seleccionado: ${card.title}`);
  }
  crearNuevoProyecto() {
    this.modalCrear.abrir();
  }
}
