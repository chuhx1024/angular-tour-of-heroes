import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,  UntypedFormBuilder, UntypedFormGroup, Validators  } from '@angular/forms'

@Component({
  selector: 'app-ng-form',
  templateUrl: './ng-form.component.html',
  styleUrls: ['./ng-form.component.less']
})
export class NgFormComponent implements OnInit {
  age = new FormControl(20);

  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  })

  formData = {
    username: '',
    password: ''
  }

  validateForm!: UntypedFormGroup;

  submitForm(): void {
    console.log('submit', this.validateForm.value);
  }

  constructor(private fb: UntypedFormBuilder) {}
  ngOnInit(): void {
      this.validateForm = this.fb.group({
      userName: [1, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true]
    });
  }

  ageAdd () {
    this.age.setValue(18)
  }
  subForm () {
    console.log(this.loginForm.value)
  }
}
