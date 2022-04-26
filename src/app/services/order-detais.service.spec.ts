import { TestBed } from '@angular/core/testing';

import { OrderDetaisService } from './order-detais.service';

describe('OrderDetaisService', () => {
  let service: OrderDetaisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrderDetaisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
