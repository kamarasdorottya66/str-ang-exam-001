import { Component } from '@angular/core';
import { Hero } from './model/hero';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';
  myHero: Hero = {
    name: "Batman",
    address: "Gotham",
    superpower: "speed",
    id: "1"
  };
  
}
