import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowmodelsComponent } from './showmodels.component';

describe('ShowmodelsComponent', () => {
  let component: ShowmodelsComponent;
  let fixture: ComponentFixture<ShowmodelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowmodelsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowmodelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
