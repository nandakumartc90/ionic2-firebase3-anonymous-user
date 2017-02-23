import { Injectable } from '@angular/core';
import firebase from 'firebase';

@Injectable()
export class AuthData {
  public fireAuth: firebase.auth.Auth;
  public userProfile: firebase.database.Reference;

  constructor() {
    this.fireAuth = firebase.auth();
    this.userProfile = firebase.database().ref('/userProfile');
  }

  getUser(): firebase.User {
    return this.fireAuth.currentUser;
  }

  loginUser(email: string, password: string): firebase.Promise<any> {
    return this.fireAuth.signInWithEmailAndPassword(email, password);
  }

  createAnonymousUser(): firebase.Promise<any> {
    return this.fireAuth.signInAnonymously();
  }

  linkAccount(email, password): firebase.Promise<any> {
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
