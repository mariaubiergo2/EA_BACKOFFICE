import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifychallengeComponent } from './modifychallenge.component';

describe('ModifychallengeComponent', () => {
  let component: ModifychallengeComponent;
  let fixture: ComponentFixture<ModifychallengeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifychallengeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifychallengeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
