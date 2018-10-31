import { Component, OnChanges, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {
  @Input() rating: number;
  starWidth: number;
  constructor() { }

  @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

  ngOnChanges() {
    this.starWidth = this.rating * 86 / 5;
  }

  onClick() {
    this.ratingClicked.emit(`Clicked on rating ${this.rating}`);

  }

}
