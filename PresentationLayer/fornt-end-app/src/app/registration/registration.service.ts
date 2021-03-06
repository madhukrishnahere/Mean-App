import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { User } from "../models/user";
import { ConstantsService } from "../constants.service";
import { Observable } from "../../../node_modules/rxjs";

@Injectable({
  providedIn: "root"
})
export class RegistrationService {
  constructor(private http: HttpClient, private constants: ConstantsService) {}

  registerUser(user: User): Observable<User> {
    return this.http.post<User>(this.constants.registrationUrl, user);
  }
}
