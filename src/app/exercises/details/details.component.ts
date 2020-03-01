import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  isDetailsVisible = false;
  timesClicked = [];

  constructor() { }

  ngOnInit(): void {
  }

  showAndHideDetails() {
    this.isDetailsVisible = this.isDetailsVisible ? false : true;
    this.timesClicked.push('Clicked at '.concat(Date.now().toString()));
  }

}
