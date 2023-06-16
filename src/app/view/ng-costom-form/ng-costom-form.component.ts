import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms'


@Component({
  selector: 'app-ng-costom-form',
  templateUrl: './ng-costom-form.component.html',
  styleUrls: ['./ng-costom-form.component.less']
})
export class NgCostomFormComponent {
  constructor (private fb:FormBuilder) {}

  valiDateForm:FormGroup = this.fb.group({
    username: ['', [Validators.required, Validators.maxLength(8), Validators.minLength(5)]],
    password: ['', [Validators.required, this.passwordVal]]
  });

  passwordVal (password: FormControl):object {
    const val = password.value
    if (!val) {
      return {
        msg: '请输入密码'
      }
    }
    if (val.length > 5) {
      return {
        msg: '密码不要超过5位'
      }
    }
    return {}
  }

  subValidDataFun () {
      console.log(this.valiDateForm.get('username')?.errors?.['required'])
  }

}
