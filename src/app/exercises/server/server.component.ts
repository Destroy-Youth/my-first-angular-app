import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.scss']
})
export class ServerComponent implements OnInit {

  id = 10;
  status = 'on standby';

  constructor() {
    this.status = Math.random() > 0.5 ? 'offline' : 'online';
  }

  ngOnInit(): void {
  }

  getColor() {
    return this.status === 'online' ? 'green' : 'red';
  }
}
