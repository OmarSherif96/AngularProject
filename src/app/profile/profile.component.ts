import { Component, OnInit, Input } from '@angular/core';
import { RegisterdataService } from '../services/registerdata.service';
import { NgForm } from '@angular/forms';
import { Response } from '@angular/http';
import { CurrentUser } from '../models/currentUser.model';




@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers: [RegisterdataService]
}) 
export class ProfileComponent implements OnInit {
  currentUserFirstName=(JSON.parse(localStorage.getItem('userFirstName')))
  currentUserLastName=(JSON.parse(localStorage.getItem('userLastName')))
  currentUserEmail=(JSON.parse(localStorage.getItem('userEmail')))
  currentUserJob=(JSON.parse(localStorage.getItem('userJob')))
  currentUserMobile=(JSON.parse(localStorage.getItem('userMobile')))
  
  constructor(private register: RegisterdataService) { }
  ngOnInit() {
    console.log(this.currentUserFirstName)
      }
    }
   
    

