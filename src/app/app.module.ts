import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

// Import the pages
import { LoginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home';
import { AnonymousListPage } from '../pages/anonymous-list/anonymous-list';
import { LandingPage } from '../pages/landing/landing';
import { SignupPage } from '../pages/signup/signup';

// Import the providers
import { AuthData } from '../providers/auth-data';

import { StatusBar } from '@ionic-native/status-bar';
import { Splashscreen } from '@ionic-native/splash-screen';

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
    IonicModule.forRoot(MyApp)
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
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthData,
    StatusBar,
    Splashscreen
  ]
})
export class AppModule {}