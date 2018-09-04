import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { NavController } from 'ionic-angular';

import { UserData } from '../../providers/user-data';

import { UserAdd } from '../../interfaces/user-add';

import { TabsPage } from '../tabs-page/tabs-page';
import { RegisterObj } from '../../models/registerObj'

@Component({
  selector: 'page-user',
  templateUrl: 'signup.html'
})
export class SignupPage {

  fecha: Date;

  signup: UserAdd = { name: '', email: '', password: '', direccion: '',fecha: new Date() };
  submitted = false;
  registerObj: RegisterObj = new RegisterObj();
  error: any;

  constructor(public navCtrl: NavController, public userData: UserData) {}

  onSignup(form: NgForm) {
    this.submitted = true;

    if (form.valid) {

      this.registerObj.name = this.signup.name;
      this.registerObj.email = this.signup.email;
      this.registerObj.password = this.signup.password;
      this.registerObj.direccion = this.signup.direccion;
      this.registerObj.fecha = this.signup.fecha;

      this.userData.signup(this.registerObj).subscribe(
        res => {
          
          console.log("register correcto",res);
          this.navCtrl.push(TabsPage);
        }, error => {
          this.error = error;
          console.log("error login", error);
        }
      );
      
      //this.userData.signup(this.registerObj);

      //this.navCtrl.push(TabsPage);
    }
  }
}
