import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PendboxGridComponent } from './pendbox-grid.component';

describe('PendboxGridComponent', () => {
  let component: PendboxGridComponent;
  let fixture: ComponentFixture<PendboxGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PendboxGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PendboxGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
