import { Component, NgZone } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from 'ionic-native';

import { LandingPage } from '../pages/landing/landing';
import { AnonymousListPage } from '../pages/anonymous-list/anonymous-list';

import firebase from 'firebase';


@Component({
  template: `<ion-nav [root]="rootPage"></ion-nav>`
})
export class MyApp {
  rootPage: any;
  zone: NgZone;


  constructor(platform: Platform) {

    const firebaseConfig = {
      apiKey: "AIzaSyBwEUe6x_w_yLFrr--xYLQJLxRT2Rc8vtY",
      authDomain: "ionic-firebase-auth-9f555.firebaseapp.com",
      databaseURL: "https://ionic-firebase-auth-9f555.firebaseio.com",
      storageBucket: "ionic-firebase-auth-9f555.appspot.com",
      messagingSenderId: "904481277327"
    };

    firebase.initializeApp(firebaseConfig);

    firebase.auth().onAuthStateChanged(user => {
      this.zone.run( () => {
        if (user) {
          this.rootPage = AnonymousListPage;
        } else {
          this.rootPage = LandingPage;
        }
      });
    });

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }
}
