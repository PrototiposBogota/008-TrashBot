import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Register } from './register';
import {ActivatedRoute, Router} from '@angular/router';
import { LoginService } from '../login/login.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [LoginService]
})
export class RegisterComponent implements OnInit {

  form: FormGroup;
  private formSubmitAttempt: boolean;
  private register: Register = new Register();
  private error: any;
  
  constructor(private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private loginService: LoginService
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
      dateBorn : ['', Validators.required],
      address : ['', Validators.required],
      email : ['', Validators.required],
      passwordConfirm : ['', Validators.required],
    });
  }

  onSubmit()
  {
    if (this.form.valid) {
     
      this.register.name= this.form.controls['userName'].value;
      this.register.direccion= this.form.controls['address'].value;
      this.register.fecha= this.form.controls['dateBorn'].value;
      this.register.email = this.form.controls['email'].value;
      this.register.password = this.form.controls['password'].value;
      
      this.loginService.save(this.register).subscribe(
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

  isFieldInvalid(field: string) {
    return (
      (!this.form.get(field).valid && this.form.get(field).touched) ||
      (this.form.get(field).untouched && this.formSubmitAttempt)
    );
  }

  onReload() {
    debugger;
    this.router.navigate(['login']);
    location.reload();
  }


}
