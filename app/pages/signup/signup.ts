import { NavController } from 'ionic-angular';
import { Component } from '@angular/core';
import { AuthData } from '../../providers/auth-data/auth-data';
import { AnonymousListPage } from '../anonymous-list/anonymous-list';

@Component({
  templateUrl: 'build/pages/signup/signup.html',
  providers: [AuthData]
})
export class SignupPage {
  public email: string;
  public password: string;

  constructor(public nav: NavController, public authData: AuthData) {}

  signupUser(){
    this.authData.linkAccount(this.email, this.password).then(() => {
      this.nav.setRoot(AnonymousListPage);
    }, (error) => {
      console.log(error);
    });
  }

}
