import { UserComponent } from "../user/user/user.component";
import { LoginComponent } from "../login/login/login.component";
import { RouterModule, Routes } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { AppComponent } from "../app.component";

export const routes: Routes = [
  { path: "user", component: UserComponent },
  { path: "login", component: LoginComponent },
  { path: "", redirectTo: "login", pathMatch: "full" }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
