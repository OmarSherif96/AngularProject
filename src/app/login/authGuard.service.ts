import { Injectable } from '@angular/core';
import { CurrentUser } from '../models/currentUser.model';
import { NgForm, FormsModule, FormGroup, FormControl, Validators } from '@angular/forms'
import { RegisterdataService } from '../services/registerdata.service';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router) { }
    canActivate(route: ActivatedRouteSnapshot) {
         if(JSON.parse(localStorage.getItem('user'))===true) {
        // if (CurrentUser.isLogged == true) {
            return true;
        }

        this.router.navigate(['']);
        return false;
    }
}

