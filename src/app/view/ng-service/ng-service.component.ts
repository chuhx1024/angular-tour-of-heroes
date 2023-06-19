import { Component } from '@angular/core';
import {ServiceService} from '../../service/service.service'

@Component({
  selector: 'app-ng-service',
  templateUrl: './ng-service.component.html',
  styleUrls: ['./ng-service.component.less']
})
export class NgServiceComponent {
  constructor( private serviceService:ServiceService) {}
  list: string [] = this.serviceService.lists

  addItem () {
    this.serviceService.pushItem()
  }
}
