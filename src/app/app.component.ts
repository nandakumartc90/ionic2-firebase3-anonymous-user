import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from 'ionic-native';

import { LandingPage } from '../pages/landing/landing';
import { AnonymousListPage } from '../pages/anonymous-list/anonymous-list';

import { AngularFire } from 'angularfire2';


@Component({
  template: `<ion-nav [root]="rootPage"></ion-nav>`
})
export class MyApp {
  rootPage;

  constructor(platform: Platform, af: AngularFire) {

    let unsubscribe = firebase.auth().onAuthStateChanged( (user) => {
      if (!user) {
        this.rootPage = LandingPage;
        unsubscribe();
      } else {
        unsubscribe();
        this.rootPage = AnonymousListPage;
      }
    });
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }
}
