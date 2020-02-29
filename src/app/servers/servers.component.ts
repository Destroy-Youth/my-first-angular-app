import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss']
})
export class ServersComponent implements OnInit {

  allowAddServer = false;
  serverCreationStatus = 'No server has been created';
  serverName: string;
  serverCreated = false;
  servers = [];

  constructor() {
    setTimeout(() => {
      this.allowAddServer = true;
    }, 2000);
  }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.serverCreationStatus = this.serverName.concat(' server created!');
    this.serverCreated = true;
    this.servers.push(this.serverName);
  }


}
