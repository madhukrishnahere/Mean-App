import { Component, OnInit } from "@angular/core";
import { RegistrationService } from "../registration/registration.service";
import { User } from "../models/user";

@Component({
  selector: "app-registration",
  templateUrl: "./registration.component.html",
  styleUrls: ["./registration.component.css"]
})
export class RegistrationComponent implements OnInit {
  constructor(private registrationService: RegistrationService) {}

  ngOnInit() {}

  registerUser() {
    const user = new User();
    user.email = "test@test.in";
    user.password = "test@123";
    this.registrationService.registerUser(user).subscribe(
      data => {
        console.log("user registration is successful ", data);
      },
      error => {
        console.log("Error", error);
      }
    );
  }
}
