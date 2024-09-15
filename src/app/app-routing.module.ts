import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './Components/body/body.component';
import { DetailsComponent } from './Components/details/details.component';

const routes: Routes = [
  {path:'', component:BodyComponent},
  {path:'product/:name', component:DetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
