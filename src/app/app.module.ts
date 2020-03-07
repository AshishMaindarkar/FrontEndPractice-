import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserLoginServiceService } from './Shared/user-login-service.service';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { ResetComponent } from './reset/reset.component';
import { SharedService } from './Shared/shared.service';
import { AdduserComponent } from './adduser/adduser.component';
import { ReverseStringPipe } from './reverse-string.pipe';
import { UserDetailsComponent } from './user-details/user-details.component';
import { ViewUserDetailsComponent } from './view-user-details/view-user-details.component';
import { SearchFilterPipe } from './search-filter.pipe';
import { SearchService } from './Shared/search.service';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ResetComponent,
    AdduserComponent,
    UserDetailsComponent,
    ReverseStringPipe,
    ViewUserDetailsComponent,
    SearchFilterPipe,
    ParentComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule

  ],
  providers: [UserLoginServiceService, SharedService, SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }

