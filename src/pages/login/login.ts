import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Clients } from '../clients/clients';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class Login {
  //binded data
  loginUsername: string;
  loginPassword: string;
  registerUsername: string;
  registerPassword: string;
  isLogin: boolean;
  agreeTerms: boolean;

  constructor(public navCtrl: NavController) {
  	this.navCtrl = navCtrl;
    this.isLogin = true;
    this.agreeTerms = false;
  }

  pushPage() {
  	if(this.loginUsername === "admin" && this.loginPassword === "admin") {
      this.navCtrl.push(Clients);
    } else {
      this.loginUsername = "";
      this.loginPassword = "";
      document.getElementById('loginUsername').classList.add('input-error');
      document.getElementById('loginPassword').classList.add('input-error');
    }
  }

  switchToRegister() {
    this.isLogin = false;
  }

  switchToLogin() {
    this.isLogin = true;
  }

  registerTerms() {
    this.agreeTerms = true;
  }

  declineTerms() {
    this.agreeTerms = false;
  }

}