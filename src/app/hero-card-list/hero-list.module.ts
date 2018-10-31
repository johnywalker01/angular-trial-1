import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroCardListComponent } from './hero-card-list.component';
import { HeroCardComponent } from '../hero-card/hero-card.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'hero-list', component: HeroCardListComponent },
    ])
  ],
  declarations: [
    HeroCardListComponent,
    HeroCardComponent
  ]
})
export class HeroListModule { }
