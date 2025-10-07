import { Component } from '@angular/core';
import { CommonModule, AsyncPipe, NgIf } from '@angular/common'; // ✅ importa lo necesario
import { LoaderService } from '../../../services/loader.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [CommonModule, AsyncPipe, NgIf], // ✅ aquí está la clave
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent {
  isLoading!: Observable<boolean>;

  constructor(private loaderService: LoaderService) {
    this.isLoading = this.loaderService.loading$;
  }
}
