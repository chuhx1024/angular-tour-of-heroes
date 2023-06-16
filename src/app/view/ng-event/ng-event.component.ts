import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-event',
  templateUrl: './ng-event.component.html',
  styleUrls: ['./ng-event.component.less']
})
export class NgEventComponent {

  title: String = "input数据"
  clickFun () {
    alert(1)
  };

  inputChange (e:Event) {
    console.log(e.target)
  };

  getValue (v: String) {
    alert(v)
  }


}
