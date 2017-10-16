import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyDZ2LlPR4yBfmEVQA06ZwGeN_VJlOc6Y8k",
      authDomain: "ng-recipe-book-499e0.firebaseapp.com",
    });
  }
}
