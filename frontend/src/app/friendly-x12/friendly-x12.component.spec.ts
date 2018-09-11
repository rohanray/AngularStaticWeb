import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendlyX12Component } from './friendly-x12.component';

describe('FriendlyX12Component', () => {
  let component: FriendlyX12Component;
  let fixture: ComponentFixture<FriendlyX12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FriendlyX12Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FriendlyX12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
