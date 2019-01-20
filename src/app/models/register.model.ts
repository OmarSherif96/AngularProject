import {Meeting} from './meeting.model'
import { Contact } from './contact.model';
export class Register{
    public email:string 
    public first:string
    public last:string
    public password:string
    public job:string
    public mobile:number
    public id:number
    // private contacts:Meeting[];
    public static meetings:Meeting[]=[];
    public static index=0;
    private isAdmin:boolean;
    private isLogged:boolean;
    p
    constructor(first,last,email,password,job,mobile){
        this.first=first;
        this.email=email;
        this.last=last;
        this.job=job;
        this.password=password;
        this.mobile=mobile;
        this.id = Register.index++;
        
        
    }
    
    addMeeting(meet: Meeting){
        Register.meetings.push(meet);
    }
    
}