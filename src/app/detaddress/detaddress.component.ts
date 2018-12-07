import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

import { IAddressBook } from './addressbook';
import { AddressDetails } from './addressbook';
import { AddressBookService } from './addressbook.service';
import { Http , Response } from '@angular/http';
import { Observable } from 'rxjs';
import { Location } from '@angular/common';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-detaddress',
  templateUrl: './detaddress.component.html',
  styleUrls: ['./detaddress.component.css'],
  providers:[AddressBookService]
})
export class DetaddressComponent implements OnInit {
    iaddressbooks : Promise<AddressDetails[]>;
    data : AddressDetails = new AddressDetails();
    
    constructor(
                private _route : ActivatedRoute,
                private _location : Location, 
                private _router:Router,
                private _addressdet:AddressBookService)
    {
        this.iaddressbooks = this._addressdet.getaddresses();
        //.subscribe(iadd => this.data = iadd);
        //console.log("Address Details >>" + this.data);
    }

    ngOnInit():void{
       
    }

    goToAddressBook(id:number):void{
        //this.addid = Number.parseInt((<HTMLButtonElement>event.target).value) ;
        console.log(id);
        this._router.navigate(['/addbook',id]);
    }
}
