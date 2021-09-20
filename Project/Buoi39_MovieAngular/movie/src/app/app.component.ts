import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthDataService } from './services/auth-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'movie';

  constructor(private _http: HttpClient, private _authSV: AuthDataService) {}

  fetchProfile() {
    this._http.post(
      "http://movieapi.cyberlearn.vn/api/QuanLyNguoiDung/ThongTinTaiKhoan",
      undefined,
    ).subscribe((res: any) => {
      this._authSV.setMe(res.content);
    }, (err) => {
      console.log(err);
    })
  }

  ngOnInit() {
    if(localStorage.getItem("token")) {
      this.fetchProfile();
      console.log("OK")
    }
  }
}
