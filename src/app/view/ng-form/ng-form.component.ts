import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms'

@Component({
  selector: 'app-ng-form',
  templateUrl: './ng-form.component.html',
  styleUrls: ['./ng-form.component.less']
})
export class NgFormComponent {
  age = new FormControl(20);

  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  })

  formData = {
    username: '',
    password: ''
  }

  ageAdd () {
    this.age.setValue(18)
  }
  subForm () {
    console.log(this.loginForm.value)
  }
}
