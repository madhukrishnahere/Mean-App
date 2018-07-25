import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class ConstantsService {
  constructor() {}
  public loginCookieName = "token";
  public loginCookieExpiresInDays = 1;
  public baseUrl = "http://localhost:3000";
  public registrationUrl = this.baseUrl + "/user/signup";
  public loginUrl = this.baseUrl + "/user/login";
}
