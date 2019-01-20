import { Component, OnInit, OnDestroy, } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm,FormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import {CurrentUser} from '../models/currentUser.model';
import { RegisterdataService } from '../services/registerdata.service';
import { database } from 'firebase';
import { AngularFireDatabase, FirebaseListObservable } from "angularfire2/database"; 
import { PageEvent } from '@angular/material';
@Component({
  selector: 'app-login',
  styleUrls: ['./login.component.css'],
 
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  private registerData:FirebaseListObservable<any[]>; 
  length = 100;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  emailFound:boolean;
  pageEvent: PageEvent;
  loginForm:FormGroup;
  constructor(private router:Router,private registerService:RegisterdataService,
  ){ 
  this.registerData=this.registerService.getRegisterData();
  }
   onLogin(form: NgForm){
     var index;
     var UserKey;
     this.registerData.subscribe(snapshots=>{
      snapshots.forEach(snapshot => {
        if(this.loginForm.value.Email===snapshot.val().email && this.loginForm.value.Password===snapshot.val().password){
        alert("Logged in successfully");
        CurrentUser.isLogged = true;
        CurrentUser.userFirstName=snapshot.val().first;
        CurrentUser.userLastName=snapshot.val().last;
        CurrentUser.userJob=snapshot.val().job;
        CurrentUser.userMobile=snapshot.val().mobile;
        CurrentUser.userEmail=snapshot.val().email;
        CurrentUser.userKey=snapshot.key;
        localStorage.setItem('user',JSON.stringify(CurrentUser.isLogged));
        localStorage.setItem('userFirstName',JSON.stringify(CurrentUser.userFirstName));
        localStorage.setItem('userLastName',JSON.stringify(CurrentUser.userLastName));
        localStorage.setItem('userJob',JSON.stringify(CurrentUser.userJob));
        localStorage.setItem('userMobile',JSON.stringify(CurrentUser.userMobile));
        localStorage.setItem('userEmail',JSON.stringify(CurrentUser.userEmail));
        localStorage.setItem('userKey',JSON.stringify(CurrentUser.userKey));
        this.router.navigateByUrl('profile');
        this.registerData.subscribe().unsubscribe();
      }
      
      })
        if(CurrentUser.isLogged!=true){
          alert("Either User name or password are incorrect");
          // CurrentUser.isLogged = true;
        }
      })
   }
  
  ngOnInit() {
    // CurrentUser.isLogged=false;
    // localStorage.setItem('user',JSON.stringify(CurrentUser.isLogged))
    console.log(JSON.parse(localStorage.getItem('user')));
    // if(JSON.parse(localStorage.getItem('user'))===true){
    //   this.router.navigateByUrl('profile');
    // }
    this.loginForm = new FormGroup({
      'Password': new FormControl(null, [Validators.required,Validators.minLength(6)]),
      'Email': new FormControl(null,[Validators.required,Validators.email]),
    })
  }
  ngOnDestroy(){
    this.registerData.subscribe().unsubscribe();
  }

  
  
}
