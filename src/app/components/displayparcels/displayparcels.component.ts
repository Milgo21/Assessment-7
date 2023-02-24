import { Component } from '@angular/core';
import { Parcel } from 'src/app/interface';
import { ParcelService } from 'src/app/parcel.service';

@Component({
  selector: 'app-displayparcels',
  templateUrl: './displayparcels.component.html',
  styleUrls: ['./displayparcels.component.css']
})
export class DisplayparcelsComponent {
  Parcels:Parcel[]=[]
  constructor(private service:ParcelService){
    this.Parcels = this.service.parcels
  }
}
