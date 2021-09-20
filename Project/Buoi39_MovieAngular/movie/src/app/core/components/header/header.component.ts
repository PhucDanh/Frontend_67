import { Component, OnInit } from '@angular/core';
import { AuthDataService } from 'src/app/services/auth-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  me: any;

  constructor(private _authSV: AuthDataService) { }

  ngOnInit(): void {
    this._authSV.me.subscribe((value) => {
      this.me = value;
    })
  }

}
