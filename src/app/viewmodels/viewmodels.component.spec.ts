import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewmodelsComponent } from './viewmodels.component';

describe('ViewmodelsComponent', () => {
  let component: ViewmodelsComponent;
  let fixture: ComponentFixture<ViewmodelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewmodelsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewmodelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
