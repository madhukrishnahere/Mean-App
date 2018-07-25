// Ref: - https://scotch.io/courses/routing-angular-2-applications/canactivate-and-canactivatechild

import { Injectable } from "@angular/core";
import { CanActivate, CanActivateChild } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class AuthGuardService implements CanActivate, CanActivateChild {
  constructor() {}
  canActivate(): boolean {
    // :Promise<boolean> {
    // return new Promise((res, rej) => {
    //   console.log("i am checking to see if you are logged in");
    //   setTimeout(() => res(true), 3000);
    // });
    return true;
  }

  canActivateChild() {
    console.log("checking child route access");
    return true;
  }
}
