import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  serverid:number=10;
  serverstatus:string="offline";
  serverstatusmethod:string="OFFLINEmethod";
  getserverstatus(){
    return this.serverstatusmethod;
  };
  allowNewServer:boolean = false;


  constructor() { 
  setTimeout(() => {
    this.allowNewServer=true;
  }, 2000);
  }

  ngOnInit() {
  }

}
