import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from './../auth/auth.service';
import {ActivatedRoute, Router} from '@angular/router';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'app-menu-nav',
  templateUrl: './menu-nav.component.html',
  styleUrls: ['./menu-nav.component.css']
})
export class MenuNavComponent implements AfterViewInit{

  ngAfterViewInit() {
    console.log('rr');
  }

  @ViewChild('drawer') public drawer: MatSidenav;

  isLoggedIn$: Observable<boolean>;

  estaLogueado:string = localStorage.getItem('token');

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );
    
  constructor(private breakpointObserver: BreakpointObserver,private authService: AuthService,private route: ActivatedRoute,
    private router: Router) {}


  ngOnInit() {
    this.isLoggedIn$ = this.authService.isLoggedIn;
  }

  onLogout() {
    localStorage.setItem('token','');
    this.authService.logout();

    this.router.navigate(['login']);
    location.reload();
  }

  
  
  }
