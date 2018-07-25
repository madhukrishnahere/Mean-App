import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { User } from "../../models/user";
import { LoginService } from "../login.service";
import { CookiescontainerService } from "../../cookiescontainer.service";
import { ConstantsService } from "../../constants.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private cookiescontainerService: CookiescontainerService,
    private router: Router,
    private constantsService: ConstantsService
  ) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required]]
    });
  }
  // convenience getter for easy access to form fields
  get f() {
    return this.loginForm.controls;
  }

  signinUser() {
    // console.log("registerUser");
    this.submitted = true;
    const formData = this.loginForm.value;
    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }
    const user = new User();
    user.password = formData.password;
    user.email = formData.email;

    this.loginService.singinUser(user).subscribe(
      data => {
        // Ref: https://alligator.io/js/introduction-localstorage-sessionstorage/
        console.log("User login is successful ", data);

        this.cookiescontainerService.setCookie(
          this.constantsService.loginCookieName,
          data.token,
          this.constantsService.loginCookieExpiresInDays
        );
        this.router.navigate(["/profiles"]);
      },
      error => {
        console.log(error.error.message);
        alert(error.error.message);
      }
    );
  }
}
