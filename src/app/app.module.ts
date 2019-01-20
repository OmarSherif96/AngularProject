import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HttpClientModule } from '@angular/common/http';
import { ProfileComponent } from './profile/profile.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { RegisterdataService } from './services/registerdata.service';
import { MeetingsComponent } from './meetings/meetings.component';
import {ReactiveFormsModule} from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';  
import { MeetingService } from './services/meeting.service';
import { AllContactsComponent } from './contacts/all-contacts/all-contacts.component';

import { DropdownDirective } from './header/dropdown.directive';
import { HeaderComponent } from './header/header.component';
import { AuthGuard } from './login/authGuard.service';
import { environment } from '../environments/environment';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {MaterialModule} from './material.module';

import { DashComponent } from './dash/dash.component';
@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ProfileComponent,
    LoginComponent,
    PageNotFoundComponent,
    RegisterComponent,
    MeetingsComponent,
    AllContactsComponent,
    DropdownDirective,
    HeaderComponent,
    DashComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.masterFirebaseConfig),
    AngularFireDatabaseModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [RegisterdataService,MeetingService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
