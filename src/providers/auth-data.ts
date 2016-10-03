import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable()
export class AuthData {
  public fireAuth: any;
  public userProfile: any;

  constructor() {
    this.fireAuth = firebase.auth();
    this.userProfile = firebase.database().ref('/userProfile');
  }

  getUser(){
    return this.fireAuth.currentUser;
  }

  loginUser(email: string, password: string): any {
    return this.fireAuth.signInWithEmailAndPassword(email, password);
  }

  createAnonymousUser(): any {
    return this.fireAuth.signInAnonymously();
  }

  linkAccount(email, password): any {
    var credential = (<any> firebase.auth.EmailAuthProvider).credential(email, password);
    return this.fireAuth.currentUser.link(credential).then( (user) => {
      this.userProfile.child(user.uid).update({
        email: email,
      });
    }, (error) => {
      console.log("Account linking error", error);
    });
  }

}
