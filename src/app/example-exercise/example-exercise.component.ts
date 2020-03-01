import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example-exercise',
  templateUrl: './example-exercise.component.html',
  styleUrls: ['./example-exercise.component.scss']
})
export class ExampleExerciseComponent implements OnInit {

  title = 'my-first-app';
  name = 'ASs';

  constructor() { }

  ngOnInit(): void {
  }

}
