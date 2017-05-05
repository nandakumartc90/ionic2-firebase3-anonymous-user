import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  public email: string;
  public password: string;

  constructor(public nav: NavController, public authProvider: AuthProvider) {}

  loginUser(){
    this.authProvider.loginUser(this.email, this.password).then((authData) => {
      this.nav.setRoot('AnonymousListPage');
    }, (error) => {
      console.log(error);
    });

  }

}
