import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {


  username: string;
  password: string;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  } 

  login(): void {
    if (this.username == 'admin' && this.password == 'admin') {
      this.router.navigate(["/admin"]);
    } else if (this.username == 'manager' && this.password == 'manager') {
      this.router.navigate(["/manager"]);
    } else {
      alert("Login Failed");
    }
  }
}
