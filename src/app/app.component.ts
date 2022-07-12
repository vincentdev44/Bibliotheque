import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {
    var firebaseConfig = {
      apiKey: "AIzaSyA8YePFnQRUGsbrDzFYyLWxR60a4VFHJac",
      authDomain: "bookshelves-33c2c.firebaseapp.com",
      databaseURL: "https://bookshelves-33c2c-default-rtdb.europe-west1.firebasedatabase.app",
      projectId: "bookshelves-33c2c",
      storageBucket: "bookshelves-33c2c.appspot.com",
      messagingSenderId: "273867646788",
      appId: "1:273867646788:web:d44bd3b0a0c8f9eeda5911"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
   }
}
