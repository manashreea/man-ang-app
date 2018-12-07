import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';

import { IAddressBook } from '../detaddress/addressbook';
import { AddressDetails } from '../detaddress/addressbook';
import { AddressBookService } from '../detaddress/addressbook.service';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css'],
  providers:[AddressBookService]
})
export class AddbookComponent implements OnInit {
  addId:string;
  addSetReset = false;
  addBooks : AddressDetails[];
  addBookDetails : AddressDetails = new AddressDetails();
  IsLinkedData:false;
  routeParam : number;

  constructor(private route: ActivatedRoute,
	          private router: Router,
            private location: Location,
            private addBookService : AddressBookService) 
        {}

  ngOnInit() {

        this.route.params.subscribe((param : Params) => this.addId = (param['id'] || 0));

        if(this.addId.toString() != '0')
        {
          this.route.params
          .switchMap((params:Params)=> this.addBookService.getAddBook(+params['id']))
          .subscribe(addbook=> this.addBookDetails = addbook);
        }
      else{
        
          this.addBookDetails = new AddressDetails();
      }
  }

      goBack(): void {
        this.location.back();
    }

  countryList:Object[]=[
    {
      "Id":"1",
      "Name": "India"
    },
    {
      "Id":"2",
      "Name": "USA"
    },
    {
      "Id":"3",
      "Name": "Japan"
    },
    {
      "Id":"4",
      "Name": "UK"
    }
  ];

  onResetAdd(){
      this.addBookDetails = new AddressDetails();
  }

  onCountrySelected(event:Event){
    //this.addCountry = (<HTMLOptionElement>event.target).value;
  }

  onSaveAdd(){
    this.addSetReset = true;
    this.addBookService.addAddBook(this.addBookDetails);
    this.router.navigate(['/detaddress']);

  }

}
