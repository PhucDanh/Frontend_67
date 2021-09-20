import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthDataService } from 'src/app/services/auth-data.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  @ViewChild("signInForm") signInForm!: NgForm;

  constructor(private _http: HttpClient, private _authSV: AuthDataService) { }

  handleSubmitSignIn(): void {
    if(this.signInForm.invalid) return;
    const accountInfo = { 
      taiKhoan: this.signInForm.value.taiKhoan, 
      matKhau: this.signInForm.value.matKhau,
    }
    this._http.post(
      "http://movieapi.cyberlearn.vn/api/QuanLyNguoiDung/DangNhap",
      accountInfo,
      {
        headers: {
          TokenCybersoft:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJGcm9udCBFbmQgNjciLCJIZXRIYW5TdHJpbmciOiIyOS8wMS8yMDIyIiwiSGV0SGFuVGltZSI6IjE2NDM0MTQ0MDAwMDAiLCJuYmYiOjE2MTc1NTU2MDAsImV4cCI6MTY0MzU2MjAwMH0.N1IDGkovxIU1E2CjtI_QtEJksOO3lxZxuIwXABaa45w',
        },
      }
    ).subscribe((res: any) => {
      console.log("sign in res",res);
      this._authSV.setMe(res.content);
      localStorage.setItem("token sign in", res.content.accessToken);
    }, (err) => {
      console.log("sign in err", err)
    })
  }

  ngOnInit(): void {
  }

}
