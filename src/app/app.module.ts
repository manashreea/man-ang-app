import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AddbookComponent } from './addbook/addbook.component';
import { DetaddressComponent } from './detaddress/detaddress.component';
import { IAddressBook } from './detaddress/addressbook';
import { AddressBookService } from './detaddress/addressbook.service';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    AddbookComponent,
    DetaddressComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [AddressBookService],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
