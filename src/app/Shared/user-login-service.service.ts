import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment, userdetails } from 'src/environments/environment';
import { catchError } from 'rxjs/operators';
import { UserLogin } from './UserLogin';
import { UserDetails } from './user-details';
import { BehaviorSubject } from 'rxjs';
const httpheader = {
  headders: new HttpHeaders({ 'content -type': 'application/json' })
};
let headers = new HttpHeaders();
headers = headers.set('Content-Type', 'application/json');

@Injectable({
  providedIn: 'root'
})
export class UserLoginServiceService {
  user = new UserLogin();
  userBroadcast = new BehaviorSubject<UserLogin>(this.user);
  currentUser = this.userBroadcast.asObservable();
  constructor(private http: HttpClient) { }

  loginUser(userLogin: UserLogin): Observable<UserLogin[]> {

    let subUrl = `${environment.baseUrl}`;
    const Ulr = `${userdetails.url}`;

    if (userLogin.userName !== undefined && userLogin.userPassword !== undefined) {
      subUrl = `${subUrl}loginUser`;
      return this.http.post<UserLogin[]>(subUrl, userLogin).pipe(catchError(this.errorHandler));
    }
  }
  errorHandler(error: HttpErrorResponse) {
    // tslint:disable-next-line: deprecation
    return Observable.throw(error.message || 'server error');
  }
  ResetUser(userReset: UserLogin): Observable<string> {
    const options = { headers };

    if (userReset.userName !== undefined && userReset.userPassword !== undefined &&
      userReset.userNewPassword !== undefined) {
      const subUrl = `${environment.baseUrl}updateUser`;
      return this.http.put<string>(subUrl, userReset, options);
    }

  }
  sessionLogout(): Observable<any> {
    const subUrl = `${environment.baseUrl}logoutUser`;
    return this.http.post<any>(subUrl, '');
  }
  isLoggedIn() {
    return !!sessionStorage.getItem('user');
  }
  getToken() {
    sessionStorage.getItem('user');
  }
  getUserDetails(): Observable<UserDetails[]> {
    return this.http.get<UserDetails[]>('https://jsonplaceholder.typicode.com/users');
  }
  getUserDetailsById(id: number): Observable<UserDetails[]> {
    return this.http.get<UserDetails[]>('https://jsonplaceholder.typicode.com/users/' + id);
  }
  addCurrentUser(newUser: UserLogin) {
    this.userBroadcast.next(newUser);
  }
}
