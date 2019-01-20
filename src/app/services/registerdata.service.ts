import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {Response} from '@angular/http'
import  'rxjs-compat'

import { Observable } from 'rxjs/observable';
import { strictEqual } from 'assert';
import { Register } from '../models/register.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
@Injectable()
export class RegisterdataService {
registerData: FirebaseListObservable<any[]>;
constructor(private database: AngularFireDatabase) {
this.registerData = database.list('data',{preserveSnapshot:true});

  
}

addRegisterData(newRegisterData: Register) {
this.registerData.push(newRegisterData)

 }

getRegisterData(){
  return this.registerData
  }
  getRegisterById(key:string){
    return this.database.object(key);
  }
}
