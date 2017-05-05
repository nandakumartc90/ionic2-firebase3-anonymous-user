import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';

@IonicPage()
@Component({
  selector: 'page-landing',
  templateUrl: 'landing.html',
})
export class LandingPage {

  constructor(public navCtrl: NavController, public authProvider: AuthProvider) {}

  goToLogin(): void {
    this.navCtrl.push('LoginPage');
  }

  goToList(): void {
    this.authProvider.createAnonymousUser().then( () => {
      this.navCtrl.setRoot('AnonymousListPage');
    });
  }

}
