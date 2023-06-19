import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-ng-father',
  templateUrl: './ng-father.component.html',
  styleUrls: ['./ng-father.component.less']
})
export class NgFatherComponent {
  constructor () {
    
    
  }
  title: string = '父组件的title'

  list: string[] = ['小米']

  @ViewChild('myChild') child: any

  handleSon () {
    this.child.btnFn()
  }

  addListItem (item: string) {
    console.log(item, 123)
    this.list.push(item)
  }
  ngOnChanges () {
    console.log('ngOnChanges')
  }
  ngOnInit () {
    console.log('ngOnInit')
  } 

  changeTitle () {
    this.title = '我的值改变了'
  }

}
