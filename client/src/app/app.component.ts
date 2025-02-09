import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from './_model/User';
import { AccountService } from './_services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'client';
  users:any;
 constructor(private account:AccountService){}
  ngOnInit()
  {
    // this.getUsers();
    this.setCurrentUser()
  }
  setCurrentUser(){
    const user:User=JSON.parse(localStorage.getItem('user'));
    this.account.SetCurrentUser(user);
  }

//   getUsers()
//      {   this.http.get('https://localhost:5001/api/users').subscribe(response=>{
//       this.users=response
//      },
// error=>{
//   console.log(error)
// })
//   }
}
