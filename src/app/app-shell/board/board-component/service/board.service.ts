import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BoardService {

 constructor() {}

  getCards(): Observable<any[]> {
    const mockData = [
      {
        id: 1,
        title: 'Producto A',
        description: 'Ejemplo de descripción A',
        image: 'https://picsum.photos/200?random=1'
      },
      {
        id: 2,
        title: 'Producto B',
        description: 'Ejemplo de descripción B',
        image: 'https://picsum.photos/200?random=2'
      },
      {
        id: 3,
        title: 'Producto C',
        description: 'Ejemplo de descripción C',
        image: 'https://picsum.photos/200?random=3'
      }
    ];

    return of(mockData);
  }

}
