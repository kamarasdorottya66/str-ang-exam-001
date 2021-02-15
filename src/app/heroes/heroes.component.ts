import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../model/hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
 
  @Input()
  hero: Hero = new Hero;

constructor() { }

  ngOnInit(): void {
  }



}
