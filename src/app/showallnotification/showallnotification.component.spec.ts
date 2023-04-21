import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowallnotificationComponent } from './showallnotification.component';

describe('ShowallnotificationComponent', () => {
  let component: ShowallnotificationComponent;
  let fixture: ComponentFixture<ShowallnotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowallnotificationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowallnotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
