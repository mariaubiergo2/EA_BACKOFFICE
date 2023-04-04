import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormchallengeComponent } from './formchallenge.component';


describe('FormchallengeComponent', () => {
  let component: FormchallengeComponent;
  let fixture: ComponentFixture<FormchallengeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormchallengeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormchallengeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
