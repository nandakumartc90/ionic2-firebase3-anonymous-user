import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  public email: string;
  public password: string;

  constructor(public nav: NavController, public authProvider: AuthProvider) {}

  signupUser(){
    this.authProvider.linkAccount(this.email, this.password).then(() => {
      this.nav.setRoot('AnonymousListPage');
    }, (error) => {
      console.log(error);
    });
  }

}