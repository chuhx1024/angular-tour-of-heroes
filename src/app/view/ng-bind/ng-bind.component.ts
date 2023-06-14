import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-bind',
  templateUrl: './ng-bind.component.html',
  styleUrls: ['./ng-bind.component.less']
})
export class NgBindComponent {
  value = `
    <div>
      <p>0<p>
      <p>1<p>
    </div>
  `
}
