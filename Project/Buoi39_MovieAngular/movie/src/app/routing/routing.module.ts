import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailIndexComponent } from '../detail/detail-index/detail-index.component';
import { HomeIndexComponent } from '../home/home-index/home-index.component';
import { SignInComponent } from '../auth/sign-in/sign-in.component';
import { SignUpComponent } from '../auth/sign-up/sign-up.component';

const routes: Routes = [
  { path: "", component: HomeIndexComponent},
  { path: "detail/:id", component: DetailIndexComponent},
  { path: "signIn", component: SignInComponent},
  { path: "signUp", component: SignUpComponent}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
  ]
})
export class RoutingModule { }
