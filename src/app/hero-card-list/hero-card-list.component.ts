import { Component, OnInit } from '@angular/core';
import { Hero, IHero } from '../shared/hero';
import { HeroService } from '../shared/hero.service';

@Component({
  selector: 'app-hero-card-list',
  templateUrl: './hero-card-list.component.html',
  styleUrls: ['./hero-card-list.component.css']
})
export class HeroCardListComponent implements OnInit {
  errMessage:string;
  heroes:IHero[];
  constructor(private _heroService: HeroService) {
  }

  ngOnInit() {
    this.retrieveData();  
  }

  // Service call; NOT using any http service.
  retrieveConstantData(): void {
    this.heroes = this._heroService.getStaticHeros256();
  }

  // Service call; using http service.
  retrieveData(): void {
    this._heroService.getProducts256().subscribe(
     data => this.heroes = data, // success path
      error => this.errMessage = <any> error // error path
    );
  }
}
