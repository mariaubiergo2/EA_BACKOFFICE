import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyuserComponent } from './modifyuser.component';

describe('ModifyuserComponent', () => {
  let component: ModifyuserComponent;
  let fixture: ComponentFixture<ModifyuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifyuserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifyuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
