import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminpanelComponent } from './admin/adminpanel/adminpanel.component'
import { AboutmeComponent } from './aboutme/aboutme.component';
import { ItemsmainComponent } from './itemsmain/itemsmain.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { SigninComponent } from './user/signin/signin.component';
const routes: Routes = [
  
  { path: 'admin', component: AdminpanelComponent },
  { path: '', component: MainpageComponent },
  { path: 'signin', component: SigninComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
