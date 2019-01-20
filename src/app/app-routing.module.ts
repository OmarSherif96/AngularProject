import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component'; 

import { ProfileComponent } from './profile/profile.component'; 
import { LoginComponent } from './login/login.component'; 
import { RegisterComponent } from './register/register.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import { MeetingsComponent } from './meetings/meetings.component';
import {AllContactsComponent} from './contacts/all-contacts/all-contacts.component'
import { AuthGuard } from './login/authGuard.service';
import {CurrentUser} from './models/currentUser.model';
import { DashComponent } from './dash/dash.component';
const routes: Routes = [
  {path: '',component:LoginComponent},
  {path: 'about', component:AboutComponent,canActivate: [AuthGuard]},
  {path: 'profile', component:ProfileComponent,canActivate: [AuthGuard]},
  {path: 'register',component:RegisterComponent},
  {path: 'meetings',component:MeetingsComponent,canActivate: [AuthGuard]},
  {path: 'all-contacts',component:AllContactsComponent,canActivate: [AuthGuard]},
  {path:'dash', component:DashComponent,canActivate: [AuthGuard]},
  {path: '**',component:PageNotFoundComponent},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
