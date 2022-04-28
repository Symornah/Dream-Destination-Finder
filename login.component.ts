import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user:any;
  pass:any;
  showLogin=true;
  constructor(private data:DataService,private router:Router) { 

  }

  ngOnInit(): void {
  }

  userLogin(){
    this.data.userLogin({user:this.user,pass:this.pass}).subscribe(res => {
      if(res.message.includes("Success"))
      this.showLogin=false;
      setTimeout(()=>{
        this.router.navigate(["/dream"])
      },3000)
    })

   }
}
