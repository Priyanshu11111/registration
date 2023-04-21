import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeslistComponent } from './typeslist.component';

describe('TypeslistComponent', () => {
  let component: TypeslistComponent;
  let fixture: ComponentFixture<TypeslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeslistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypeslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
