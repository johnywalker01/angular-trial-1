import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { StarComponent } from './star/star.component';
import { ImageCarouselComponent } from './image-carousel/image.carousel.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    StarComponent,
    ImageCarouselComponent
  ],
  exports: [
    StarComponent,
    ImageCarouselComponent,
    CommonModule,
    FormsModule
  ]
})
export class SharedModule { }
