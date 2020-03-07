import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ResetComponent } from './reset/reset.component';
import { AuthGuard } from './Shared/auth.guard';
import { AdduserComponent } from './adduser/adduser.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { ViewUserDetailsComponent } from './view-user-details/view-user-details.component';
import { ParentComponent } from './parent/parent.component';


const routes: Routes = [
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'home', component: HomeComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'adduser', component: AdduserComponent },
      { path: 'viewUser', component: UserDetailsComponent },
      { path: 'viewDetails/:id', component: ViewUserDetailsComponent },
      { path: 'parent', component: ParentComponent },
    ]
  },

  { path: 'reset', component: ResetComponent }
  ,
  {
    path: '', redirectTo: '/login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



