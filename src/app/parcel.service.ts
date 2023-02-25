import { Injectable } from '@angular/core';
import { Parcel } from './interface';

@Injectable({
  providedIn: 'root'
})
export class ParcelService {


  parcels=[
    {"name":"Samsing",
    "email":"mimi@travel.com",
    "destination":"Guanzou"},
    {
    "name":"Tecno",
    "email":"wewe@travel.com",
    "destination":"Sugoi"
    },
    {
    "name":"Laptop",
    "email":"lapi@travel.com",
    "destination":"Nyeri"
    }
]

constructor(){

}
addNewParcel(addedParcel:Parcel){
 this.parcels.push(addedParcel);
}

}
