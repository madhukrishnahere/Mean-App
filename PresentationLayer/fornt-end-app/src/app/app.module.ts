import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { LoginModule } from "./login/login.module";
import { UserModule } from "./user/user.module";
import { MaterialModule } from "./material/material.module";
import { routing } from "./routes/app.routing.module";
import { HttpClientModule } from "@angular/common/http";
import { RegistrationService } from "../app/registration/registration.service";
import { ConstantsService } from "../app/constants.service";
import { RegistrationModule } from "./registration/registration.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { EqualValidator } from "./equal-validator.directive";
import { ProfilesModule } from "./profiles/profiles.module";
import { AuthGuardService } from "./auth-guard.service";

@NgModule({
  declarations: [AppComponent, EqualValidator],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    LoginModule,
    UserModule,
    MaterialModule,
    routing,
    HttpClientModule,
    RegistrationModule,
    ProfilesModule
  ],
  providers: [ConstantsService, RegistrationService, AuthGuardService],
  bootstrap: [AppComponent],
  exports: [FormsModule, ReactiveFormsModule, EqualValidator, EqualValidator]
})
export class AppModule {}
