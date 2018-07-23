import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { LoginModule } from "./login/login.module";
import { UserModule } from "./user/user.module";
import { MaterialModule } from "./material/material.module";
import { routing } from "./routes/app.routing.module";
import { RouterModule } from "../../node_modules/@angular/router";
import { LoginComponent } from "./login/login/login.component";
import { HttpClientModule } from "@angular/common/http";
import { RegistrationService } from "../app/registration/registration.service";
import { ConstantsService } from "../app/constants.service";
import { RegistrationModule } from "./registration/registration.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    LoginModule,
    UserModule,
    MaterialModule,
    routing,
    HttpClientModule,
    RegistrationModule
  ],
  providers: [ConstantsService, RegistrationService],
  bootstrap: [AppComponent]
})
export class AppModule {}
