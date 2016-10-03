import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { AnonymousListPage } from '../anonymous-list/anonymous-list';
import { AuthData } from '../../providers/auth-data';

@Component({
  selector: 'page-landing',
  templateUrl: 'landing.html',
})
export class LandingPage {

  constructor(public navCtrl: NavController, public authData: AuthData) {}

  goToLogin(){
    this.navCtrl.push(LoginPage);
  }

  goToList(){
    this.authData.createAnonymousUser().then( () => {
      this.navCtrl.setRoot(AnonymousListPage);
    });
  }

}
