import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root' // disponible en toda la app
})
export class LoaderService {
  private loading = new BehaviorSubject<boolean>(false);
  loading$ = this.loading.asObservable(); // observable para escuchar el estado

  show() {
    this.loading.next(true);
  }

  hide() {
    this.loading.next(false);
  }
}
