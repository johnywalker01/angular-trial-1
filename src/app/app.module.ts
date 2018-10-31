import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ExponentialStrengthPipe } from './exponential-strength.pipe';
import { PageNotFoundComponent } from './page-not-found.component';
import { HeroListModule } from './hero-card-list/hero-list.module';
import { HeroModule } from './hero/hero.module';
import { GitUsersModule } from './git-users/git-users.module';
import { GitReposComponent } from './git-repos/git-repos.component';


@NgModule({
  declarations: [
    AppComponent,
    ExponentialStrengthPipe,
    PageNotFoundComponent,
    GitReposComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      { path: 'git-repos', component: GitReposComponent },
      { path: '', redirectTo: 'heros', pathMatch: 'full' },
      { path: '**', component: PageNotFoundComponent }
    ]),
    HeroListModule,
    HeroModule,
    GitUsersModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
