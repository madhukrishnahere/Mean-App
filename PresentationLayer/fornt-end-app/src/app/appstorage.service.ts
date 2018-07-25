// Ref: https://alligator.io/js/introduction-localstorage-sessionstorage/

import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class AppstorageService {
  constructor() {}

  save(key: string, value: any) {
    localStorage.setItem(key, value);
  }

  get(key: string): any {
    return localStorage.getItem(key);
  }

  update(key: string, value: any) {
    localStorage.setItem(key, value);
  }

  delete(key: string) {
    localStorage.removeItem(key);
  }

  saveJSON(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  getJSON(key: string): any {
    return JSON.parse(localStorage.getItem(key));
  }

  exists(): boolean {
    return localStorage.length > 0;
  }
}
