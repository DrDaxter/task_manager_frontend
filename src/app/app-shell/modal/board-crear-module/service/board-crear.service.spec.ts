/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BoardCrearService } from './board-crear.service';

describe('Service: BoardCrear', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BoardCrearService]
    });
  });

  it('should ...', inject([BoardCrearService], (service: BoardCrearService) => {
    expect(service).toBeTruthy();
  }));
});
