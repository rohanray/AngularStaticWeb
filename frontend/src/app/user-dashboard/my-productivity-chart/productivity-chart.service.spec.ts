import { TestBed, inject } from '@angular/core/testing';

import { ProductivityChartService } from './productivity-chart.service';

describe('ProductivityChartService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductivityChartService]
    });
  });

  it('should be created', inject([ProductivityChartService], (service: ProductivityChartService) => {
    expect(service).toBeTruthy();
  }));
});
