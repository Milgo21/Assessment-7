import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AddparcelComponent } from './components/addparcel/addparcel.component';
import { DisplayparcelsComponent } from './components/displayparcels/displayparcels.component';

const routes: Routes = [
  // { path: '', redirectTo: '/home', pathMatch: 'full' },
  // {path:'home', component:AppComponent},
  {path:'Add', component:AddparcelComponent},
  {path:'Parcels', component:DisplayparcelsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

