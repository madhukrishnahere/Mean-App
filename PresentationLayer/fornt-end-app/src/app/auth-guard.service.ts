// Ref: - https://scotch.io/courses/routing-angular-2-applications/canactivate-and-canactivatechild

import { Injectable } from "@angular/core";
import { CanActivate, CanActivateChild } from "@angular/router";
import { CookiescontainerService } from "./cookiescontainer.service";
import { ConstantsService } from "./constants.service";
import { TokenVerifyService } from "./token-verify.service";

@Injectable({
  providedIn: "root"
})
export class AuthGuardService implements CanActivate, CanActivateChild {
  constructor(
    private cookiescontainerService: CookiescontainerService,
    private constantsService: ConstantsService,
    private tokenVerifyService: TokenVerifyService
  ) {}
  canActivate(): Promise<boolean> {
    return new Promise((res, rej) => {
      const token = this.cookiescontainerService.getCookie(
        this.constantsService.loginCookieName
      );
      this.tokenVerifyService.isAuthorized(token).subscribe(
        x => {
          res(x.isvalidtoken);
        },
        error => {
          console.log(error.error.message);
          alert(error.error.message);
        }
      );
    });
    // : boolean {
    // const token = this.cookiescontainerService.getCookie(
    //   this.constantsService.loginCookieName
    // );

    // const user = this.tokenVerifyService.isAuthorized(token);
    // user.subscribe(user);

    // if (user) {
    //   return true;
    // } else {
    //   return false;
    // }
    // :Promise<boolean> {
    // return new Promise((res, rej) => {
    //   console.log("i am checking to see if you are logged in");
    //   setTimeout(() => res(true), 3000);
    // });
  }

  canActivateChild() {
    console.log("checking child route access");
    return true;
  }
}
