import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-pipe',
  templateUrl: './ng-pipe.component.html',
  styleUrls: ['./ng-pipe.component.less']
})
export class NgPipeComponent {
  dateStr: Date = new Date()
  name: string = 'xiaoming'
}
