import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/throw";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/do";

import { IHero, Hero } from "./hero";

@Injectable()
export class HeroService {
  private _product64Url = "../../assets/heros64.json";
  private _product256Url = "../../assets/heros256.json";

  constructor(private _http: HttpClient) { 
  }

  getProducts256(): Observable<IHero[]> {
    return this._http.get<IHero[]>(this._product256Url)
      // .do(data => console.log("All : " + JSON.stringify(data)))
      .catch(this.handleError);
  }

  getProducts64(): Observable<IHero[]> {
    return this._http.get<IHero[]>(this._product64Url)
      // .do(data => console.log("All : " + JSON.stringify(data)))
      .catch(this.handleError);
  }
  private handleError(err: HttpErrorResponse) {
    console.log(err.message);
    return Observable.throw(err.message);
  }

  getStaticHeros256(): IHero[] {
    return [
      new Hero(11, "Bob", 4.2, "https://cdn0.iconfinder.com/data/icons/famous-characters-add-on-vol-2-glyph/48/Sed-44-256.png"),
      new Hero(12, "Bat Man", 3.5, "https://cdn0.iconfinder.com/data/icons/famous-characters-add-on-vol-2-glyph/48/Sed-26-256.png"),
      new Hero(13, "Groot", 4, "https://cdn0.iconfinder.com/data/icons/famous-characters-add-on-vol-2-glyph/48/Sed-25-256.png"),
      new Hero(14, "Captain America", 3.9, "https://cdn0.iconfinder.com/data/icons/famous-characters-add-on-vol-2-glyph/48/Sed-01-256.png"),
      new Hero(15, "Mutant", 3.5, "https://cdn0.iconfinder.com/data/icons/famous-characters-add-on-vol-2-glyph/48/Sed-11-256.png"),
      new Hero(16, "Iron Man", 3.9, "https://cdn0.iconfinder.com/data/icons/famous-characters-add-on-vol-2-glyph/48/Sed-10-256.png"),
      new Hero(17, "Chewbacca", 2.3, "https://cdn0.iconfinder.com/data/icons/famous-characters-add-on-vol-2-glyph/48/Sed-40-256.png"),
      new Hero(18, "Super Sonic", 3, "https://cdn0.iconfinder.com/data/icons/famous-characters-add-on-vol-2-glyph/48/Sed-14-256.png"),
      new Hero(19, "Stuart", 4.1, "https://cdn0.iconfinder.com/data/icons/famous-characters-add-on-vol-2-glyph/48/Sed-45-256.png"),
    ];
  }
  getStaticHeros64(): IHero[] {
    return [
      new Hero(11, "Bob", 4.2, "https://cdn0.iconfinder.com/data/icons/famous-characters-add-on-vol-2-glyph/48/Sed-44-64.png"),
      new Hero(12, "Bat Man", 3.5, "https://cdn0.iconfinder.com/data/icons/famous-characters-add-on-vol-2-glyph/48/Sed-26-64.png"),
      new Hero(13, "Groot", 4, "https://cdn0.iconfinder.com/data/icons/famous-characters-add-on-vol-2-glyph/48/Sed-25-64.png"),
      new Hero(14, "Captain America", 3.9, "https://cdn0.iconfinder.com/data/icons/famous-characters-add-on-vol-2-glyph/48/Sed-01-64.png"),
      new Hero(15, "Mutant", 3.5, "https://cdn0.iconfinder.com/data/icons/famous-characters-add-on-vol-2-glyph/48/Sed-11-64.png"),
      new Hero(16, "Iron Man", 3.9, "https://cdn0.iconfinder.com/data/icons/famous-characters-add-on-vol-2-glyph/48/Sed-10-64.png"),
      new Hero(17, "Chewbacca", 2.3, "https://cdn0.iconfinder.com/data/icons/famous-characters-add-on-vol-2-glyph/48/Sed-40-64.png"),
      new Hero(18, "Super Sonic", 3, "https://cdn0.iconfinder.com/data/icons/famous-characters-add-on-vol-2-glyph/48/Sed-14-64.png"),
      new Hero(19, "Stuart", 4.1, "https://cdn0.iconfinder.com/data/icons/famous-characters-add-on-vol-2-glyph/48/Sed-45-64.png"),
    ];
  }
}
