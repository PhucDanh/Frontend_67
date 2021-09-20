import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  @ViewChild("signUpForm") signUpForm!: NgForm;
  @ViewChild("account") account!: any;

  constructor(private _http: HttpClient) { }

  registerUser(): void {
    const newUser = {...this.signUpForm.value, maNhom:'GP01'};
    console.log(newUser);
    this._http.post(
      "http://movieapi.cyberlearn.vn/api/QuanLyNguoiDung/DangKy",
      newUser,
      {
        headers: {
          TokenCybersoft:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJGcm9udCBFbmQgNjciLCJIZXRIYW5TdHJpbmciOiIyOS8wMS8yMDIyIiwiSGV0SGFuVGltZSI6IjE2NDM0MTQ0MDAwMDAiLCJuYmYiOjE2MTc1NTU2MDAsImV4cCI6MTY0MzU2MjAwMH0.N1IDGkovxIU1E2CjtI_QtEJksOO3lxZxuIwXABaa45w',
        },
      }
    ).subscribe((res) => {
      console.log("sign up res",res)
    }, (err) => {
      console.log("sign up err",err)
    })
  }

  handleSubmitSignUp(): void {
    // console.log("sign up form",this.signUpForm);
    // console.log("sign up form value",this.signUpForm.value);
    // console.log("reference account",this.account);
    if(this.signUpForm.invalid) return;
    this.registerUser();

  }

  ngOnInit(): void {
  }

}
