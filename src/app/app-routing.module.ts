import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgFormComponent } from "@/app/view/ng-form/ng-form.component";
import { NgSwitchComponent } from "@/app/view/ng-switch/ng-switch.component";
import { NgHttpComponent } from "@/app/view/ng-http/ng-http.component";
import { NgForComponent } from "@/app/view/ng-for/ng-for.component";
import { NgIfComponent } from "@/app/view/ng-if/ng-if.component";

const routes: Routes = [
  {path: '', component: NgHttpComponent},
  {path: 'ng-http', component: NgHttpComponent},
  {path: 'ng-form', component: NgFormComponent},
  {path: 'ng-switch/:paramsId/:name', component: NgSwitchComponent},
  {path: 'ng-for', component: NgForComponent},
  {path: 'ng-if', component: NgIfComponent},
  {path: '**', component: NgFormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
