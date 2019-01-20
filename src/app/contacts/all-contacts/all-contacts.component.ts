import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from "angularfire2/database";
import { RegisterdataService } from 'src/app/services/registerdata.service';
import { CurrentUser } from 'src/app/models/currentUser.model';

import { NgForm,FormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { Contact } from 'src/app/models/contact.model';

@Component({
  selector: 'app-all-contacts',
  templateUrl: './all-contacts.component.html',
  styleUrls: ['./all-contacts.component.css']
})
export class AllContactsComponent implements OnInit {
  // private registerData3:FirebaseListObservable<any[]>; 
  contactsForm:FormGroup
  contactFound:boolean;
   first:string;
         last:string;
          email:string;
          job:string;
  contacts:Contact[]=[];
  constructor(private registerService:RegisterdataService ){
    // this.registerData3=this.registerService.getRegisterData();
  }

  ngOnInit() {
    
    this.contactsForm = new FormGroup({
      
      'email': new FormControl(null,[Validators.required,Validators.email]),
    })
  }
 searchTable() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }       
    }
  }
  
  // addContact(){
    
  //   this.registerData3.subscribe(snapshots=>{
  //     snapshots.forEach(snapshot => {
        
  //       if(this.contactsForm.value.email===snapshot.val().email){
          
  //         this.contactFound=true;
  //        this.first=snapshot.val().first;
  //        this.last=snapshot.val().last;
  //         this.email=snapshot.val().email
  //         job=snapshot.val().job;
  //       }
  //     })
  //       if(this.contactFound===true){
  //         const newContact = new Contact(this.first,this.last,this.email,this.job);
          
  //         console.log(this.first,this.last,this.email,this.job)
  //         this.contacts.push(newContact);
  //         CurrentUser.userContacts.push(newContact);
  //         this.registerData3.update(JSON.parse(localStorage.getItem('userKey')),this.contacts);
  //       }
  

// })
//   }

}
