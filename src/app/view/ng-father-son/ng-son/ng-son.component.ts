import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-ng-son',
  templateUrl: './ng-son.component.html',
  styleUrls: ['./ng-son.component.less']
})
export class NgSonComponent {
  constructor () {
    
  }
  @Input()
  title?: string

  @Output()
  addList = new EventEmitter()
  
  btnFn () {
    this.addList.emit('小红')
  }
}
