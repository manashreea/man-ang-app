export interface IAddressBook{
    addressId:number,
    name:string,
    address:string;
    city:string;
    country:string;
}

export class AddressDetails{
    addressId:number = 0;
    name:string = "";
    address:string = "";
    city:string = "";
    country:string = "";
    constructor(){
        this.addressId = 0;
        this.name = "";
        this.address = "";
        this.city = "";
        this.country = "";
    }
}



