import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  //selector: '[app-servers]', //element as attribute
  //selector: '.app-servers', //element as class
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  serverCreated='Server not created';
  serverAdded = false;
  serverName = 'Old Server';
  constructor() { 
    setTimeout(() => {
      this.serverAdded=true;
    },2000);
  }

  ngOnInit() {
  }

  onCreateServer(){
    this.serverCreated = 'server created ' + this.serverName;
  }

  onUpdateServerName(event:Event){
    //console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
