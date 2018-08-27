import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdsnavigationComponent } from './edsnavigation.component';

describe('EdsnavigationComponent', () => {
  let component: EdsnavigationComponent;
  let fixture: ComponentFixture<EdsnavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdsnavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdsnavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
