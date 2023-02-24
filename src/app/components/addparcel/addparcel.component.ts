import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-addparcel',
  templateUrl: './addparcel.component.html',
  styleUrls: ['./addparcel.component.css']
})
export class AddparcelComponent implements OnInit{
  title = 'Reactiveforms';

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
