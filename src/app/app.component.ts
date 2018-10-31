import { Component } from '@angular/core';
import { HeroService } from './shared/hero.service'
import { UserService } from './shared/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HeroService, UserService]
})
export class AppComponent {
  title = 'Angular App';
}
