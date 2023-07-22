import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowpermissionComponent } from './showpermission.component';

describe('ShowpermissionComponent', () => {
  let component: ShowpermissionComponent;
  let fixture: ComponentFixture<ShowpermissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowpermissionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowpermissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
