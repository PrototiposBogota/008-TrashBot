import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { NavController } from 'ionic-angular';

import { UserData } from '../../providers/user-data';

import { UserOptions } from '../../interfaces/user-options';

import { TabsPage } from '../tabs-page/tabs-page';
import { SignupPage } from '../signup/signup';
import { User } from "../../models/user";


@Component({
  selector: 'page-user',
  templateUrl: 'login.html'
})
export class LoginPage {

  login: UserOptions = { username: '', password: '' };
  submitted = false;

  private error: string;

  private user: User = new User();

  constructor(public navCtrl: NavController, public userData: UserData) { }

  onLogin(form: NgForm) {
    this.submitted = true;

    if (form.valid) {

      this.user.email = this.login.username;
      this.user.password = this.login.password;

      this.userData.login(this.user).subscribe(
        res => {
          // debugger;
          console.log("login correcto", res);
          this.navCtrl.push(TabsPage);
          
        }, error => {
          // debugger;
          this.error = error;
          console.log("error login", error);
        }
      );

      //this.userData.login(this.user);
      
    }
  }

  onSignup() {
    this.navCtrl.push(SignupPage);
  }
}
