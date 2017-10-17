import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SignupComponent } from "app/auth/signup/signup.component";
import { SigninComponent } from "app/auth/signin/signin.component";
import { AuthRoutingModule } from "app/auth/auth-routing.module";
import { FormsModule } from "@angular/forms";

@NgModule({
    declarations: [
        SignupComponent,
        SigninComponent
    ],
    imports: [
        CommonModule,
        AuthRoutingModule,
        FormsModule,
    ],
    providers: [],
    bootstrap: []
})

export class AuthModule {

}