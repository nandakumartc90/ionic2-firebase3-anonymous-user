import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { SignupPage } from '../signup/signup';
import { AuthData } from '../../providers/auth-data';

@Component({
  selector: 'page-anonymous-list',
  templateUrl: 'anonymous-list.html',
})
export class AnonymousListPage {
  public apartments: number[];
  constructor(public navCtrl: NavController, public authData: AuthData, 
    public alertCtrl: AlertController) {
      this.apartments = [1, 2, 3, 4, 5];
  }

  goToDetail(){
    if(this.authData.getUser().isAnonymous == true){
      let alert = this.alertCtrl.create({
        message: "If you want to continue you'll need to provide an email and create a password",
        buttons: [
          { text: "Cancel" },
          {
            text: "OK",
            handler: data => {
              this.navCtrl.push(SignupPage);
            }
          }
        ]
      });
      alert.present();
    } else {
      this.navCtrl.push(HomePage);
    }
  }

}
