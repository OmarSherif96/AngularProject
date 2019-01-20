import { Component, OnInit, OnChanges } from '@angular/core';
import { RegisterdataService } from '../services/registerdata.service';
import { NgForm,FormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import {Register} from '../models/register.model'
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { formArrayNameProvider } from '@angular/forms/src/directives/reactive_directives/form_group_name';
import { CurrentUser } from '../models/currentUser.model';
// import { AuthService} from './auth.service'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  private registerData:FirebaseListObservable<any[]>; 
  registerForm:FormGroup;
  private emailFound:boolean;
  constructor(private registerService: RegisterdataService) {
  this.registerData=this.registerService.getRegisterData();
  console.log(this.registerData);
}  
  ngOnInit() {
    
    this.registerForm = new FormGroup({
      'Password': new FormControl(null, [Validators.required,Validators.minLength(6)]),
      'Firstname': new FormControl(null,[Validators.required]),
      'Lastname': new FormControl(null,[Validators.required]),
      'Email': new FormControl(null,[Validators.required,Validators.email]),
      'Job': new FormControl(null,[Validators.required]),
      'Mobile': new FormControl(null,[Validators.required,Validators.pattern('[0-9]*'),Validators.minLength(12)])
    })
  }

  register(form: NgForm){
    this.registerData.subscribe(snapshots=>{
      snapshots.forEach(snapshot => {
        if(snapshot.val().email===this.registerForm.value.Email){
          this.emailFound=true;
        }
      })
      
    })  
    if(this.emailFound===true){
      
      alert("Email already taken");
      this.emailFound=null;
   }
   else{
  const newRegister = new Register(form.value.Firstname,form.value.Lastname,form.value.Email,form.value.Password,form.value.Job,form.value.Mobile);
  
   this.registerService.addRegisterData(newRegister);
   alert("User Registered Sucessfully");
   this.emailFound=null;
   }
   
  }




}

