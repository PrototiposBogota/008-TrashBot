import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {User} from '../auth/user';
import { LoginService } from './login.service';
//import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  private formSubmitAttempt: boolean;
  private user: User = new User();
  private error: any;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private loginService: LoginService
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  isFieldInvalid(field: string) {
    return (
      (!this.form.get(field).valid && this.form.get(field).touched) ||
      (this.form.get(field).untouched && this.formSubmitAttempt)
    );
  }

  onSubmit() {
    if (this.form.valid) {
     
      
      this.user.email = this.form.controls['email'].value;
      this.user.password = this.form.controls['password'].value;
      
      this.loginService.login(this.user).subscribe(
        res => {
          
          console.log("login correcto");
          this.onReload();
        }, error => {
          this.error = error;
          console.log("error login", error);
        }
      );
    }
    this.formSubmitAttempt = true;
  }

  onReload() {
    debugger;
    this.router.navigate(['inicio']);
    location.reload();
  }



}
