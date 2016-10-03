import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';

// Import the pages
import { LoginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home';
import { AnonymousListPage } from '../pages/anonymous-list/anonymous-list';
import { LandingPage } from '../pages/landing/landing';
import { SignupPage } from '../pages/signup/signup';

// Import the providers
import { AuthData } from '../providers/auth-data';

// Import the AF2 Module
import { AngularFireModule } from 'angularfire2';
 
// AF2 Settings
export const firebaseConfig = {
  apiKey: "AIzaSyBwEUe6x_w_yLFrr--xYLQJLxRT2Rc8vtY",
  authDomain: "ionic-firebase-auth-9f555.firebaseapp.com",
  databaseURL: "https://ionic-firebase-auth-9f555.firebaseio.com",
  storageBucket: "ionic-firebase-auth-9f555.appspot.com",
  messagingSenderId: "904481277327"
};
 
@NgModule({
  declarations: [
    MyApp,
    AnonymousListPage,
    LandingPage,
    LoginPage,
    SignupPage,
    HomePage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AnonymousListPage,
    LandingPage,
    LoginPage,
    SignupPage,
    HomePage
  ],
  providers: [
    AuthData
  ]
})
export class AppModule {}