import { Component } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  email:string=""
  password:string=""
  userDetails:any=[
    {uname:"Harry",age:29},
    {uname:"Louis",age:31},
    {uname:"Liam",age:30},
    {uname:"Niall",age:30}
  ]
 constructor(private ds:DataService){
  this.email = this.ds.email
  this.password = this.ds.password
 }
}
