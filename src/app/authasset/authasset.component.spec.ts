import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthassetComponent } from './authasset.component';

describe('AuthassetComponent', () => {
  let component: AuthassetComponent;
  let fixture: ComponentFixture<AuthassetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthassetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthassetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
