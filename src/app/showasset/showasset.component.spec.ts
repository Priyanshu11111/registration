import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowassetComponent } from './showasset.component';

describe('ShowassetComponent', () => {
  let component: ShowassetComponent;
  let fixture: ComponentFixture<ShowassetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowassetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowassetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
