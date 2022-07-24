import { Component } from '@angular/core';
import { SharedDataService } from './service/shared-data-service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'project';
  routerlinks = "itemsmain"
  sidemenu = false;
  
  subscription: Subscription;

  constructor(private sharedDataService: SharedDataService) {

    

      // subscribe to app component messages
      this.subscription = this.sharedDataService.getMessage().subscribe(message => { this.sidemenu = message; });
  }
  closeMenu(){
    this.sidemenu = !this.sidemenu;
  }
 sendMessage(): void {
        // send message to subscribers via observable subject
  this.sharedDataService.sendMessage(this.sidemenu);   
  console.log("sendmessage")
  }
  ngOnDestroy() {
      // unsubscribe to ensure no memory leaks
      this.subscription.unsubscribe();
  }
}
