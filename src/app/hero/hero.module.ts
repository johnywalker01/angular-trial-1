import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HeroComponent } from './hero.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'heros', component: HeroComponent },
    ]),
    SharedModule
  ],
  declarations: [
    HeroComponent
  ]
})
export class HeroModule { }
