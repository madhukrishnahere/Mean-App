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
import { UserComponent } from "./user/user/user.component";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, LoginModule, UserModule, MaterialModule, routing],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
