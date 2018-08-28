import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyProductivityChartComponent } from './my-productivity-chart.component';

describe('MyProductivityChartComponent', () => {
  let component: MyProductivityChartComponent;
  let fixture: ComponentFixture<MyProductivityChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyProductivityChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyProductivityChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
