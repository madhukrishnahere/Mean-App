import { Component, OnInit } from "@angular/core";
import { RegistrationService } from "../registration/registration.service";
import { User } from "../models/user";
import { Router } from "@angular/router";
import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl
} from "@angular/forms";

@Component({
  selector: "app-registration",
  templateUrl: "./registration.component.html",
  styleUrls: ["./registration.component.css"]
})
export class RegistrationComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;

  constructor(
    private registrationService: RegistrationService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ["", Validators.required],
      lastName: [""],
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(6)]],
      repassword: ["", [Validators.required, Validators.minLength(6)]]
    });
  }
  // convenience getter for easy access to form fields
  get f() {
    return this.registerForm.controls;
  }

  registerUser() {
    // console.log("registerUser");
    this.submitted = true;
    const test = this.registerForm.value;
    // console.log(test);
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
    const user = new User();
    user.firstName = test.firstName;
    user.lastName = test.lastName;
    user.password = test.password;
    user.email = test.email;
    console.log(user);
    // var test = this.registerForm.controls.
    this.registrationService.registerUser(user).subscribe(
      data => {
        console.log("user registration is successful ", data);

        this.router.navigate(["/signin"]);
      },
      error => {
        console.log(error.error.message);
        alert(error.error.message);
      }
    );
  }
}
