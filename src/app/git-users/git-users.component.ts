import { Component, OnInit } from '@angular/core';

import { IUserResponse } from '../shared/user-response';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-git-users',
  templateUrl: './git-users.component.html',
  styleUrls: ['./git-users.component.css']
})
export class GitUsersComponent implements OnInit {
  errMessage: string;
  gitUsers: IUserResponse[];

  constructor(private _gitUserService: UserService) { }

  ngOnInit() {
    this._gitUserService.getGitUserList().subscribe(
      data => {
        this.gitUsers = data;
      }, error => {
        this.errMessage = <any>error;
      });
  }

}
