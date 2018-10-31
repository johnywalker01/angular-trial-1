import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { UserService } from '../shared/user.service';
import { IUserResponse } from '../shared/user-response';

@Component({
  selector: 'app-git-user-details',
  templateUrl: './git-user-details.component.html',
  styleUrls: ['./git-user-details.component.css']
})
export class GitUserDetailsComponent implements OnInit {

  pageTitle: string = "User Details";
  errMessage: string;
  gitUser: IUserResponse;

  constructor(private _route: ActivatedRoute, private _router: Router,private _gitUserService: UserService) { }

  ngOnInit() {
    let loginId = this._route.snapshot.paramMap.get('id');
    // console.log("ID is " + loginId);
    this.pageTitle += " " + loginId;

    this.retrieveUserDetails(loginId);
  }

  onBack(): void {
    this._router.navigate(['/users']);
  }

  retrieveUserDetails(userId: string) {
    this._gitUserService.getGitUserDetails(userId).subscribe(
      data => {
        this.gitUser = data;
      }, error => {
        this.errMessage = <any>error;
      });
  }

}
