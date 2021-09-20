import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exe2',
  templateUrl: './exe2.component.html',
  styleUrls: ['./exe2.component.scss']
})
export class Exe2Component implements OnInit {
  username: string = "";
  password: string = "";
  isLogin: boolean = false;

  constructor() { }

  handleLogin(): void {
    if(this.username === "cybersoft" && this.password === "cybersoft") {
      this.isLogin = true;
    } else {
      alert("Log in failed");
    }
  }

  ngOnInit(): void {
  }

}
