import { Component, OnInit } from '@angular/core';
import { CurrentUser } from '../models/currentUser.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  logout(){
    CurrentUser.isLogged=false;
    localStorage.setItem('user',JSON.stringify(CurrentUser.isLogged));
    this.router.navigateByUrl('');
  }
}
