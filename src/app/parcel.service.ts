import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ParcelService {

  // constructor() { }
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
}
