import { Injectable } from "@angular/core";
import { Http } from "@angular/http";

@Injectable({
  providedIn: "root"
})
export class RegistrationService {
  constructor(private http: Http) {}
}
