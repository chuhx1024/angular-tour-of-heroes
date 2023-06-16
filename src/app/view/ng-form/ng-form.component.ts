import { Component } from '@angular/core';
import { FormControl } from '@angular/forms'

@Component({
  selector: 'app-ng-form',
  templateUrl: './ng-form.component.html',
  styleUrls: ['./ng-form.component.less']
})
export class NgFormComponent {
  age = new FormControl();

  ageAdd () {
    this.age.setValue(18)
  }
}
