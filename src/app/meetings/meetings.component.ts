import { Component, OnInit, OnChanges } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import { MeetingService } from '../services/meeting.service';
import { Meeting } from '../models/meeting.model';

import { NgForm,FormsModule, FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { formArrayNameProvider } from '@angular/forms/src/directives/reactive_directives/form_group_name';
import { FirebaseListObservable } from 'angularfire2/database';
import { Register } from '../models/register.model';
import { RegisterdataService } from '../services/registerdata.service';
import { CurrentUser } from '../models/currentUser.model';

@Component({
  selector: 'app-meetings',
  templateUrl: './meetings.component.html',
  styleUrls: ['./meetings.component.css']
})
export class MeetingsComponent implements OnInit,OnChanges {
  regData:FirebaseListObservable<any[]>;
  meetingData:FirebaseListObservable<any[]>;
  meetingForm:FormGroup;
  form:NgForm;
  userName=CurrentUser.userFirstName;
  meetings:Meeting[]=[];
  constructor(private meetingService:MeetingService,private registerService:RegisterdataService) {
    this.meetingData=this.meetingService.getMeetingsData();
    this.regData=this.registerService.getRegisterData();
    console.log(this.meetingData);
   }

 
ngOnInit() {
    this.meetingForm = new FormGroup({
      'Day': new FormControl(null,[Validators.required]),   
      'Month': new FormControl(null,[Validators.required]), 
      'Year': new FormControl(null,[Validators.required]) ,  
      'Time': new FormControl(null,[Validators.required]) ,  
      'Room': new FormControl(null,[Validators.required]) ,  
       
    })
  }
  
  addMeeting(form: NgForm){
    

      const newMeeting = new Meeting(this.meetingForm.value.Day+"/"+
      this.meetingForm.value.Month+"/"+this.meetingForm.value.Year,
      this.meetingForm.value.Time,this.meetingForm.value.Room,
      JSON.parse(localStorage.getItem('userFirstName')));
      this.meetingService.addMeet(newMeeting)
       this.meetings.push(newMeeting);
      alert("Your meeting was added successfully")
        
        }
        // removeMeeting(){
        //   this.meetingData.subscribe(snapshots=>{
        //     snapshots.forEach(snapshot=>{
        //       if(snapshot.val().date==)
        //     })
        //   })
        // }

    ngOnChanges(){
      
}
}