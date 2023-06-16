import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgIfComponent } from './view/ng-if/ng-if.component';
import { NgSwitchComponent } from './view/ng-switch/ng-switch.component';
import { NgBindComponent } from './view/ng-bind/ng-bind.component';
import { NgEventComponent } from './view/ng-event/ng-event.component';
import { NgFormComponent } from './view/ng-form/ng-form.component';
import { NgCostomFormComponent } from './view/ng-costom-form/ng-costom-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NgIfComponent,
    NgSwitchComponent,
    NgBindComponent,
    NgEventComponent,
    NgFormComponent,
    NgCostomFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
