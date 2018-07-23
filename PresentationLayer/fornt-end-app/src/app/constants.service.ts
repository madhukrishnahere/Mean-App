import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class ConstantsService {
  constructor() {}
  public baseUrl = "http://localhost:3000";
  public registrationUrl = this.baseUrl + "/user/signup";
}
