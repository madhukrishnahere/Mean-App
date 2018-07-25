// canActivate - Ref:  https://scotch.io/courses/routing-angular-2-applications/canactivate-and-canactivatechild

import { UserComponent } from "../user/user/user.component";
import { LoginComponent } from "../login/login/login.component";
import { RouterModule, Routes } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { AppComponent } from "../app.component";
import { RegistrationComponent } from "../registration/registration.component";
import { ProfilesComponent } from "../profiles/profiles.component";
import { AuthGuardService } from "../auth-guard.service";

export const routes: Routes = [
  { path: "user", component: UserComponent },
  { path: "signin", component: LoginComponent },
  { path: "signup", component: RegistrationComponent },
  {
    path: "profiles",
    canActivate: [AuthGuardService],
    component: ProfilesComponent
  },
  { path: "", redirectTo: "signin", pathMatch: "full" }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
