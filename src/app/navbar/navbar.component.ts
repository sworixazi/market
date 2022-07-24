import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SharedDataService } from '../service/shared-data-service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  sidemenu = false;
  subscription: Subscription;
  constructor(private sharedDataService:SharedDataService){
      this.subscription = this.sharedDataService.getMessage().subscribe(message => { this.sidemenu = message; });

  }
  
  openMenu(){
    this.sidemenu = !this.sidemenu;
    console.log(this.sidemenu)

    this.sendMessage()
  }
  sendMessage(): void {
        // send message to subscribers via observable subject
  this.sharedDataService.sendMessage(this.sidemenu);   
  console.log("sendmessage")
  }

  // clearMessage():void{
  //   this.sharedDataService.clearMessage();
  // }

  ngOnInit(): void {
  }

}
