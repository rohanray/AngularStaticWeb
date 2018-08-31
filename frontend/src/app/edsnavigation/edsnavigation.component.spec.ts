
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSidenavModule } from '@angular/material/sidenav';
import { EDSNavigationComponent } from './edsnavigation.component';

describe('EDSNavigationComponent', () => {
  let component: EDSNavigationComponent;
  let fixture: ComponentFixture<EDSNavigationComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      imports: [MatSidenavModule],
      declarations: [EDSNavigationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EDSNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
