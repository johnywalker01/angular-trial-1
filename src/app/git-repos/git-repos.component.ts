import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { IGitRepo } from '../shared/git-repo';

@Component({
  selector: 'app-git-repos',
  templateUrl: './git-repos.component.html',
  styleUrls: ['./git-repos.component.css']
})
export class GitReposComponent implements OnInit {

  errMessage: string;
  gitRepos: IGitRepo[];

  constructor(private _gitUserService: UserService) { }

  ngOnInit() {
    this._gitUserService.getGitRepoList().subscribe(
      data => {
        this.gitRepos = data;
      }, error => {
        this.errMessage = <any>error;
      });
  }

}
