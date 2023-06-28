import { Component } from '@angular/core';
import { Book } from '@/app/interFaces/index.js'

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.less']
})
export class NgForComponent {
  dateStr: Date = new Date()
  name: string = 'xiaoming';
  num: number = 24;
  books: Book[] = [
    {id: 0, price: 150, name: '三国'},
    {id: 1, price: 120, name: '水浒'},
    {id: 2, price: 180, name: '西游'},
  ]
}
