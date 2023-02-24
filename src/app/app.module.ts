import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthService } from './auth.service';
import { AddparcelComponent } from './components/addparcel/addparcel.component';
import { DisplayparcelsComponent } from './components/displayparcels/displayparcels.component';

const routes: Routes = [
  {path:'', component:AddparcelComponent},
  {path:'Add', component:AddparcelComponent},
  {path:'Parcels', component:DisplayparcelsComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    AddparcelComponent,
    DisplayparcelsComponent
  ],
  imports: [
    BrowserModule,
    // AppRoutingModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
