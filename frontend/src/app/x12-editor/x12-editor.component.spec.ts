import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { X12EditorComponent } from './x12-editor.component';

describe('X12EditorComponent', () => {
  let component: X12EditorComponent;
  let fixture: ComponentFixture<X12EditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ X12EditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(X12EditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
