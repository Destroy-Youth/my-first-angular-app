import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleExerciseComponent } from './example-exercise.component';

describe('ExampleExerciseComponent', () => {
  let component: ExampleExerciseComponent;
  let fixture: ComponentFixture<ExampleExerciseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExampleExerciseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleExerciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
