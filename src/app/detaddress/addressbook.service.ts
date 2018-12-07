import { Injectable } from '@angular/core';
import { Http , Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/toPromise';
import { IAddressBook } from './addressbook';
import { AddressDetails } from './addressbook';
import { AddBooks } from '../addbookMoc';

@Injectable()
export class AddressBookService {
   private _addressurl= 'assets/addressbooks.json';
   private _addressDetails :Promise<IAddressBook[]>;
   private _addressSelect : Observable<IAddressBook>;
   private _addreesDet : IAddressBook;
   
   constructor(private _http: Http){}

   getaddresses():Promise<AddressDetails[]>{
       return Promise.resolve(AddBooks);
   }

    addAddBook(addrbook:AddressDetails): void {
		this.getaddresses().then(abooks => {
		     let maxIndex = abooks.length - 1;
             let bookWithMaxIndex = abooks[maxIndex];
                  
             if(addrbook.addressId == 0){
                addrbook.addressId = bookWithMaxIndex.addressId + 1;
                abooks.push(addrbook);
             }
            
            }
		);
    }
    getAddBook(id: number): Promise<AddressDetails> {
        return this.getaddresses()
            .then(books => books.find(book => book.addressId === id));
    }   
}
//    public getaddresses(): Observable<IAddressBook[]> {
//       return this._http.get(this._addressurl)
//       .map((response: Response) => <IAddressBook[]> response.json());
//      // .do(data => JSON.stringify(data));
//       //.catch((error:any) => Observable.throw(error.json().error || 'server error'));
//    }