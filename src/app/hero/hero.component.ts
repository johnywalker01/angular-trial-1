import { Component, OnInit } from '@angular/core';
import {Hero} from '../shared/hero';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  title: string;
  myHero: Hero;
  showImage: boolean = false;
  filteredHeroes: Hero[];
  _listFilter: string = '';
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(filter: string) {
    this._listFilter = filter;
    this.filteredHeroes = this.listFilter ? this.performFilter(this.listFilter) : this.heroes;
    console.log("array length "+this.filteredHeroes.length);
  }
  heroes = [
    new Hero(11, 'Bob', 4.2, 'https://cdn0.iconfinder.com/data/icons/famous-characters-add-on-vol-2-glyph/48/Sed-44-64.png'),
    new Hero(12, 'Bat Man', 3.5, 'https://cdn0.iconfinder.com/data/icons/famous-characters-add-on-vol-2-glyph/48/Sed-26-64.png'),
    new Hero(13, 'Groot', 4, 'https://cdn0.iconfinder.com/data/icons/famous-characters-add-on-vol-2-glyph/48/Sed-25-64.png'),
    new Hero(14, 'Captain America', 3.9, 'https://cdn0.iconfinder.com/data/icons/famous-characters-add-on-vol-2-glyph/48/Sed-01-64.png'),
    new Hero(15, 'Mutant', 3.5, 'https://cdn0.iconfinder.com/data/icons/famous-characters-add-on-vol-2-glyph/48/Sed-11-64.png'),
    new Hero(16, 'Iron Man', 3.9, 'https://cdn0.iconfinder.com/data/icons/famous-characters-add-on-vol-2-glyph/48/Sed-10-64.png'),
    new Hero(17, 'Chewbacca', 2.3, 'https://cdn0.iconfinder.com/data/icons/famous-characters-add-on-vol-2-glyph/48/Sed-40-64.png'),
    new Hero(18, 'Super Sonic', 3, 'https://cdn0.iconfinder.com/data/icons/famous-characters-add-on-vol-2-glyph/48/Sed-14-64.png'),
    new Hero(19, 'Stuart', 4.1, 'https://cdn0.iconfinder.com/data/icons/famous-characters-add-on-vol-2-glyph/48/Sed-45-64.png'),
  ];
  constructor() {
    this.title = 'Tour of Heroes';
    this.myHero = this.heroes[0];
    this.filteredHeroes = this.heroes;
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }
  performFilter(filterBy: string): Hero[] {
    console.log("filtering " + filterBy);
    filterBy = filterBy.toLocaleLowerCase();
    return this.heroes.filter((hero: Hero) => hero.name.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  ngOnInit() {
  }

  onRatingClicked(msg:string){
    console.log(msg);
  }

}
