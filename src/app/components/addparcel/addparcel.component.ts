import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Parcel } from 'src/app/interface';
import { ParcelService } from 'src/app/parcel.service';

@Component({
  selector: 'app-addparcel',
  templateUrl: './addparcel.component.html',
  styleUrls: ['./addparcel.component.css']
})
export class AddparcelComponent implements OnInit{
  title = 'Reactiveforms';
constructor(private service:ParcelService, private route:Router){}
  reactiveForm!:FormGroup;
  ngOnInit(): void {
   this.reactiveForm = new FormGroup({
    name: new FormControl(null,[Validators.required]),
    email: new FormControl(null, [Validators.required,Validators.email, this.travelEmailValidator]),
    destination: new FormControl(null, [Validators.required])
   })
  }
  onSubmit(){
    console.log(this.reactiveForm);
    let addedParcel:Parcel= {...this.reactiveForm.value}
    this.service.addNewParcel(addedParcel);
    this.route.navigate(['/Parcels']);

  }
travelEmailValidator(control: FormControl) {
    const email = control.value;
    if (email && email.indexOf('@travel.com') === -1) {
      return {
        invalidDomain: true
      };
    }
    return null;
  }
}
