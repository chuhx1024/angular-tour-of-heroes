import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.less']
})
export class NgIfComponent {

  title: String = '我是测试字段'
  flag: Boolean = true
  hidden () {
    this.flag = !this.flag
  }
}
