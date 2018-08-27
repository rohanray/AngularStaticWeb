import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkItemsGridComponent } from './work-items-grid.component';

describe('WorkItemsGridComponent', () => {
  let component: WorkItemsGridComponent;
  let fixture: ComponentFixture<WorkItemsGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkItemsGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkItemsGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
