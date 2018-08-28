import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterObj } from './registerObj'
import { LoginServiceProvider } from '../../providers/login-service/login-service';
import { LoginPage } from '../login/login'

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
  providers: [LoginServiceProvider]
})
export class RegisterPage {

  form: FormGroup;
  registerObject: RegisterObj = new RegisterObj();
  error: any;
  loginPage = LoginPage;
  public myDate;

  constructor(public navCtrl: NavController, public navParams: NavParams,private fb: FormBuilder, private loginService: LoginServiceProvider) {
 
    this.form = this.fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
      dateBorn : ['', Validators.required],
      address : ['', Validators.required],
      email : ['', Validators.required],
      passwordConfirm : ['', Validators.required],
    });

 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');    
  }

  register(){

    debugger;

    /* if (this.form.valid) { */
     
      this.registerObject.name= this.form.controls['userName'].value;
      this.registerObject.direccion= this.form.controls['address'].value;
      this.registerObject.fecha= this.form.controls['dateBorn'].value;
      this.registerObject.email = this.form.controls['email'].value;
      this.registerObject.password = this.form.controls['password'].value;
      
      this.loginService.save(this.registerObject).subscribe(
        res => {
          
          console.log("register correcto");
          this.onReload();
        }, error => {
          this.error = error;
          console.log("error login", error);
        }
      );
    /* } */

  }

  onReload(){

    this.navCtrl.push(this.loginPage);

  }

}
