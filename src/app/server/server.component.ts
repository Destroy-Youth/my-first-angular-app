import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.scss']
})
export class ServerComponent implements OnInit {

  id = 10;
  status = 'on standby';
  allowAddServer = false;
  serverCreationStatus = 'No server has been created';
  serverName: string;
  userName: string;

  constructor() {
    setTimeout(() => {
      this.allowAddServer = true;
    }, 2000);
  }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.serverCreationStatus = this.serverName.concat(' server created!');
    alert(this.serverCreationStatus);
  }

  deleteUserName() {
    this.userName = '';
  }

}
