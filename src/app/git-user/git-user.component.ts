import { Component, OnInit, Input } from '@angular/core';
import { IUserResponse } from '../shared/user-response';

@Component({
  selector: 'app-git-user',
  templateUrl: './git-user.component.html',
  styleUrls: ['./git-user.component.css']
})
export class GitUserComponent implements OnInit {
  @Input() user:IUserResponse;
  constructor() { }

  ngOnInit() {
  }

}
