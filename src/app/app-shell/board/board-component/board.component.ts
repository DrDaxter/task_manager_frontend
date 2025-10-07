import { Component, OnInit } from '@angular/core';
import { LoaderService } from '../../services/loader.service';
import { BoardService } from '../service/board.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
   imports: [CommonModule]
})
export class BoardComponent implements OnInit {
  constructor(
    private loader: LoaderService,
    private boardService: BoardService
  ) { }

  cartas: any[] = [];
  loading = true;


  ngOnInit(): void {
    this.loadCards();
  }

  loadCards() {
    this.boardService.getCards().subscribe(data => {
        this.cartas = data.map(item => ({
          id: item.id,
          titulo: item.title,
          projectName: item.projectName,
          description: item.description,
          imagen: `https://picsum.photos/300/200?random=${Math.floor(Math.random() * 1000)}`
        }));
      });
  }

  onCardClick(card: any) {
    alert(`Has seleccionado: ${card.title}`);
  }
  crearNuevoProyecto() {
  alert('Crear nuevo proyecto');
  // Aquí podrías abrir un modal, redirigir a una ruta o mostrar un formulario
}
}
