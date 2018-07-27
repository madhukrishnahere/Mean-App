import { Injectable } from "@angular/core";
import { HttpClient } from "../../node_modules/@angular/common/http";
import { ConstantsService } from "./constants.service";
import { User } from "./models/user";
import { Observable } from "../../node_modules/rxjs";

@Injectable({
  providedIn: "root"
})
export class TokenVerifyService {
  constructor(private http: HttpClient, private constants: ConstantsService) {}

  isAuthorized(token: string): Observable<any> {
    return this.http.post<any>(this.constants.verifyToken, { token: token });
  }
}
