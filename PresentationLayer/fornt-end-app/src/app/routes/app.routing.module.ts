import { UserComponent } from "../user/user/user.component";
import { LoginComponent } from "../login/login/login.component";
import { RouterModule, Routes } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { AppComponent } from "../app.component";
import { RegistrationComponent } from "../registration/registration.component";

export const routes: Routes = [
  { path: "user", component: UserComponent },
  { path: "signin", component: LoginComponent },
  { path: "signup", component: RegistrationComponent },
  { path: "", redirectTo: "login", pathMatch: "full" }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
