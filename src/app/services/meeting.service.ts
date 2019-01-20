import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {Response} from '@angular/http'
import  'rxjs-compat'

import { Observable } from 'rxjs/observable';
import { strictEqual } from 'assert';
import { Meeting } from '../models/meeting.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class MeetingService {

  private meetingData: FirebaseListObservable<any[]>;
  constructor(private database: AngularFireDatabase){
    this.meetingData=database.list('meetings',{preserveSnapshot:true})
   }

addMeet(newMeetingData: Meeting) {
this.meetingData.push(newMeetingData)
 };
 
 
 getMeetingsData(){
   return this.meetingData;
 }
}
