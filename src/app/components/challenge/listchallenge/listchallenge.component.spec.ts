import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListchallengeComponent } from './listchallenge.component';

describe('ListchallengeComponent', () => {
  let component: ListchallengeComponent;
  let fixture: ComponentFixture<ListchallengeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListchallengeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListchallengeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
