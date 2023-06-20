import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgFormComponent } from "@/app/view/ng-form/ng-form.component";
import { NgSwitchComponent } from "@/app/view/ng-switch/ng-switch.component";

const routes: Routes = [
  {path: 'ng-form', component: NgFormComponent},
  {path: 'ng-switch', component: NgSwitchComponent},
  {path: '**', component: NgFormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
