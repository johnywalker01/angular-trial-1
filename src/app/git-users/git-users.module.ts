import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { GitUsersComponent } from './git-users.component';
import { GitUserComponent } from '../git-user/git-user.component';
import { GitUserDetailsComponent } from '../git-user-details/git-user-details.component';
import { UserGuardService } from './user-guard.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'users', component: GitUsersComponent },
      { path: 'users/:id', canActivate: [UserGuardService], component: GitUserDetailsComponent }
    ]),
  ],
  declarations: [
    GitUsersComponent,
    GitUserComponent,
    GitUserDetailsComponent
  ],
  providers: [UserGuardService]
})
export class GitUsersModule { }
