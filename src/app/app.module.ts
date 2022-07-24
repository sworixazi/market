import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { AdminpanelComponent } from './admin/adminpanel/adminpanel.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { ItemsearchComponent } from './admin/itemsearch/itemsearch.component';
import { ItemchoosenComponent } from './admin/itemchoosen/itemchoosen.component';
import { ItemsmainComponent } from './itemsmain/itemsmain.component';
import {MatIconModule} from '@angular/material/icon';
import { MainpageComponent } from './mainpage/mainpage.component'
import { SharedDataService } from './service/shared-data-service';
import { SigninComponent } from './user/signin/signin.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AdminpanelComponent,
    AboutmeComponent,
    ItemsearchComponent,
    ItemchoosenComponent,
    ItemsmainComponent,
    MainpageComponent,
    SigninComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatCheckboxModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatMenuModule,
    MatInputModule,
    MatRadioModule
    
    
  ],
  providers: [
    SharedDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
