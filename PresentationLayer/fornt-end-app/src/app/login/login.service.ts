import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { User } from "../models/user";
import { ConstantsService } from "../constants.service";
import { Observable } from "../../../node_modules/rxjs";

@Injectable({
  providedIn: "root"
})
export class LoginService {
  constructor(private http: HttpClient, private constants: ConstantsService) {}

  singinUser(user: User): Observable<any> {
    return this.http.post<any>(this.constants.loginUrl, user);
  }
}
