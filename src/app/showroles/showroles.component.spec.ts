import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowrolesComponent } from './showroles.component';

describe('ShowrolesComponent', () => {
  let component: ShowrolesComponent;
  let fixture: ComponentFixture<ShowrolesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowrolesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowrolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
