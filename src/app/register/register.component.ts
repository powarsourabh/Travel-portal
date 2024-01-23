import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;

  ngOnInit() {
    this.registerForm = new FormGroup({
      'username': new FormControl(null, Validators.required),
      'password': new FormControl(null, [Validators.required, Validators.minLength(6)]),
      'mobileNo': new FormControl(null, [Validators.required, Validators.minLength(10)])
    });
  }
  onSubmit() {
    console.log(this.registerForm.value);
    // Implement registration logic here
  }


}
