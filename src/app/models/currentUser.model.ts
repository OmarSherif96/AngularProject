import { Contact } from './contact.model';

export class CurrentUser{
public static isLogged: boolean ;
public static userFirstName: string;
public static userLastName: string;
public static userJob: string;
public static userEmail: string;
public static userMobile: number;
public static userPassword:string;
public static userKey: string;
public static userContacts:Contact[]=[];
setLoginTrue(){
    CurrentUser.isLogged=true;
}

getLoginStatus(){
    return CurrentUser.isLogged;
}
} 