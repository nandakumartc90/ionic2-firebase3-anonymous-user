import { NavController } from 'ionic-angular';
import { Component } from '@angular/core';
import { AuthData } from '../../providers/auth-data';
import { AnonymousListPage } from '../anonymous-list/anonymous-list';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  public email: string;
  public password: string;

  constructor(public nav: NavController, public authData: AuthData) {}

  loginUser(){
    this.authData.loginUser(this.email, this.password).then((authData) => {
      this.nav.setRoot(AnonymousListPage);
    }, (error) => {
      console.log(error);
    });

  }

}
