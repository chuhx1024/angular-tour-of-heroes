import { Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-ng-switch',
  templateUrl: './ng-switch.component.html',
  styleUrls: ['./ng-switch.component.less']
})
export class NgSwitchComponent {
  constructor (private routerinfo:ActivatedRoute ) {}
  value:String = '0'
  ngOnInit () {
    console.log(this.routerinfo.snapshot.queryParams['id'])
    console.log(this.routerinfo.snapshot.params['paramsId'])
    this.routerinfo.params.subscribe((params) => {
      console.log(params['paramsId'])
      console.log(params['name'])
    })
  }
}
