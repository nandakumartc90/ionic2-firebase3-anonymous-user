import { Component } from '@angular/core';
import { ionicBootstrap, Platform } from 'ionic-angular';
import { StatusBar } from 'ionic-native';

import { HomePage } from './pages/home/home';
import { LandingPage } from './pages/landing/landing';
import { AnonymousListPage } from './pages/anonymous-list/anonymous-list';

import * as firebase from 'firebase';

@Component({
  template: '<ion-nav [root]="rootPage"></ion-nav>'
})
export class MyApp {
  rootPage: any;

  constructor(platform: Platform) {

    firebase.initializeApp({
      apiKey: "AIzaSyCw1SKmz1Bu2ibncu5Bxd1sZgR1taV7ujM",
      authDomain: "aftutorial-ef306.firebaseapp.com",
      databaseURL: "https://aftutorial-ef306.firebaseio.com",
      storageBucket: "aftutorial-ef306.appspot.com",
    });

    var unsubscribe = firebase.auth().onAuthStateChanged( (user) => {
      if (!user) {
        this.rootPage = LandingPage;
        unsubscribe();
      } else if (user.isAnonymous == true) {
        unsubscribe();
        this.rootPage = AnonymousListPage;
      } else if (user.isAnonymous == false) {
        unsubscribe();
        this.rootPage = HomePage;
      }
    });

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }
}

ionicBootstrap(MyApp);
