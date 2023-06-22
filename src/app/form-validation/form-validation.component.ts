import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-validation',
  templateUrl: './form-validation.component.html',
  styleUrls: ['./form-validation.component.css'],
})
export class FormValidationComponent {
  myForm!: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.myForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required]],
    });
  }

  onSubmit() {
    if (this.myForm.valid) {
      console.log(this.myForm.value);
    } 
    else {
      console.log('Form is invalid');
    }
  }
}
