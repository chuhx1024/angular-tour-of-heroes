import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent {

  title: String = '我是测试字段'
  flag: Boolean = true
  hidden () {
    this.flag = !this.flag
  }
}
