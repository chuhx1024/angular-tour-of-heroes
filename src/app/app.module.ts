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
import { NgPipeComponent } from './view/ng-pipe/ng-pipe.component';
import { PlusPipe } from './pipes/plus.pipe';
import { SortPipe } from './pipes/sort.pipe';
import { NgFatherComponent } from './view/ng-father-son/ng-father/ng-father.component';
import { NgSonComponent } from './view/ng-father-son/ng-son/ng-son.component';
import { NgServiceComponent } from './view/ng-service/ng-service.component';

import {ServiceService} from './service/service.service';
import { NgHttpComponent } from './view/ng-http/ng-http.component'

import AntDesign from './components/AntDesign';



import { HttpClientModule } from "@angular/common/http";
import { NgForComponent } from './view/ng-for/ng-for.component';
import { NzFormComponent } from './view/nz-form/nz-form.component';
import { NgDomComponent } from './view/ng-dom/ng-dom.component';


@NgModule({
  declarations: [
    AppComponent,
    NgIfComponent,
    NgSwitchComponent,
    NgBindComponent,
    NgEventComponent,
    NgFormComponent,
    NgCostomFormComponent,
    NgPipeComponent,
    PlusPipe,
    SortPipe,
    NgFatherComponent,
    NgSonComponent,
    NgServiceComponent,
    NgHttpComponent,
    NgForComponent,
    NzFormComponent,
    NgDomComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ...AntDesign
    
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
