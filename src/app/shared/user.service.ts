import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

import { IUserResponse } from './user-response';
import { IGitRepo } from './git-repo';

@Injectable()
export class UserService {
  private _gitUserUrl = 'https://api.github.com/users';
  private _gitRepoUrl = 'https://api.github.com/repositories';

  constructor(private _http: HttpClient) { }

  getGitUserList(): Observable<IUserResponse[]> {
    return this._http.get<IUserResponse[]>(this._gitUserUrl)
      // .do(data => console.log('UserList : ' + JSON.stringify(data)))
      .catch(this.handleError);
  }
  
  getGitUserDetails(userId:string): Observable<IUserResponse> {
    return this._http.get<IUserResponse>(this._gitUserUrl + "/" + userId)
    // .do(data => console.log('UserList : ' + JSON.stringify(data)))
    .catch(this.handleError);
  }
  
  getGitRepoList(): Observable<IGitRepo[]> {
    return this._http.get<IGitRepo[]>(this._gitRepoUrl)
      // .do(data => console.log('UserList : ' + JSON.stringify(data)))
      .catch(this.handleError);
  }

  private handleError(err: HttpErrorResponse) {
    console.log(err.message);
    return Observable.throw(err.message);
  }

}
