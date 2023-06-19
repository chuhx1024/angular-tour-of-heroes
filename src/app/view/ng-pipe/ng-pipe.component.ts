import { Component } from '@angular/core';
import { Book } from '../../interFaces/index.js'

@Component({
  selector: 'app-ng-pipe',
  templateUrl: './ng-pipe.component.html',
  styleUrls: ['./ng-pipe.component.less']
})
export class NgPipeComponent {
  dateStr: Date = new Date()
  name: string = 'xiaoming';
  num: number = 24;
  books: Book[] = [
    {id: 0, price: 150, name: '三国'},
    {id: 1, price: 120, name: '水浒'},
    {id: 2, price: 180, name: '西游'},
  ]
}
