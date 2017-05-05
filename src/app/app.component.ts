import { Component, NgZone } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import firebase from 'firebase';

@Component({
  template: `<ion-nav [root]="rootPage"></ion-nav>`
})
export class MyApp {
  rootPage: string;
  zone: NgZone;

  constructor(platform: Platform, private statusBar: StatusBar, private splashScreen: SplashScreen) {

    const firebaseConfig = {
      apiKey: "AIzaSyBwEUe6x_w_yLFrr--xYLQJLxRT2Rc8vtY",
      authDomain: "ionic-firebase-auth-9f555.firebaseapp.com",
      databaseURL: "https://ionic-firebase-auth-9f555.firebaseio.com",
      storageBucket: "ionic-firebase-auth-9f555.appspot.com",
      messagingSenderId: "904481277327"
    };

    firebase.initializeApp(firebaseConfig);

    const unsubscribe = firebase.auth().onAuthStateChanged(user => {
      this.zone.run( () => {
        if (user) {
          this.rootPage = 'AnonymousListPage';
          unsubscribe();
        } else {
          this.rootPage = 'LandingPage';
          unsubscribe();
        }
      });
    });

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
