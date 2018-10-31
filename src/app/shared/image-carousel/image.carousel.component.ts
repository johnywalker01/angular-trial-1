import { Component, OnInit, Input, OnChanges, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { HeroService } from '../hero.service';
import { IHero } from '../hero';

@Component({
  selector: 'app-image-carousel',
  animations: [
    trigger('openClose', [
      state('open', style({

        backgroundColor: "{{newColor}}"
      }), { params: { newColor: "yellow" } }),
      state('closed', style({

        backgroundColor: "{{newColor}}"
      }), { params: { newColor: "red" } }),
      transition('open => closed', [
        animate('0.5s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
    ]),
  ],
  templateUrl: './image.carousel.component.html',
  styleUrls: ['./image.carousel.component.css']
})
export class ImageCarouselComponent implements OnChanges, OnDestroy {
  imgWidth: number;
  images: IHero[];
  timerObj: any;
  newXPos: number = 0;

  @Input() boxWidth: number;

  constructor(private _heroService: HeroService) {
  }

  ngOnInit() {
    this.retrieveConstantData();
    this.timerObj = setInterval(() => {
      this.doRandomBgChange();
    }, 2000);
  }

  // Service call; NOT using any http service.
  retrieveConstantData(): void {
    this.images = this._heroService.getStaticHeros256();
  }
  ngOnChanges() {
    this.imgWidth = this.boxWidth;
  }

  dynoColor: string = "rgb(0,0,0)";
  isOpen = true;

  doRandomBgChange() {
    this.isOpen = !this.isOpen;
    let cRed = this.getRandom();
    let cGreen = this.getRandom();
    let cBlue = this.getRandom();
    this.dynoColor = "rgb(" + cRed + ", " + cGreen + ", " + cBlue + ")";
  }

  getRandom() {
    var x = Math.floor((Math.random() * 255) + 0);
    return x;
  }

  ngOnDestroy() {
    clearInterval(this.timerObj);
  }

}
