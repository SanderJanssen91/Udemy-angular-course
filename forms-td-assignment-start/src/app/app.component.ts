import { Component, ViewChild } from '@angular/core';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') signupform: NgForm;
  defaultSubscription = 'advanced';
  submitted = false;

  user = {
    email: '',
    subscriptionType: '',
    password: ''
  }

  onSubmit(){
    this.submitted = true;
    this.user.email = this.signupform.value.email;
    this.user.subscriptionType = this.signupform.value.subscription;
    this.user.password = this.signupform.value.password;
  }

}
