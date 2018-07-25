// Ref: https://www.w3schools.com/js/tryit.asp?filename=tryjs_cookie_username

import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class CookiescontainerService {
  constructor() {}

  setCookie(cookieName, cookieValue, expireDays) {
    const d = new Date();
    d.setTime(d.getTime() + expireDays * 24 * 60 * 60 * 1000);
    const expires = "expires=" + d.toUTCString();
    document.cookie =
      cookieName + "=" + cookieValue + ";" + expires + ";path=/";
  }

  getCookie(cookieName) {
    const name = cookieName + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(";");
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === " ") {
        c = c.substring(1);
      }
      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

  checkCookie(name: string): boolean {
    const user = this.getCookie(name);
    if (user !== "") {
      return true;
    }
    return false;
  }
}
