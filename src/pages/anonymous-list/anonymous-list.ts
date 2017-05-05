import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';

@IonicPage()
@Component({
  selector: 'page-anonymous-list',
  templateUrl: 'anonymous-list.html',
})
export class AnonymousListPage {
  public apartments: number[];
  constructor(public navCtrl: NavController, public authProvider: AuthProvider, 
    public alertCtrl: AlertController) {
      this.apartments = [1, 2, 3, 4, 5];
  }

  goToDetail(){
    if(this.authProvider.getUser().isAnonymous == true){
      let alert = this.alertCtrl.create({
        message: "If you want to continue you'll need to provide an email and create a password",
        buttons: [
          { text: "Cancel" },
          {
            text: "OK",
            handler: data => {
              this.navCtrl.push('SignupPage');
            }
          }
        ]
      });
      alert.present();
    } else {
      this.navCtrl.push('HomePage');
    }
  }

}
