import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './auth/auth.guard';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ChatComponent } from './chat/chat.component';
import { RegisterComponent } from './register/register.component' ;
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { EventoscreateComponent } from './eventos/eventoscreate/eventoscreate.component';
import { EventoslistComponent } from "./eventos/eventoslist/eventoslist.component";

const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'login', component: LoginComponent },
  { path: 'chat', component: ChatComponent },
  { path: 'register', component:  RegisterComponent },
  { path: 'resetPass', component:  ResetPasswordComponent },
  { path: 'inicio', component: HomeComponent},
  { path: 'createEvento', component: EventoscreateComponent},
  { path: '**', redirectTo: ''},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
