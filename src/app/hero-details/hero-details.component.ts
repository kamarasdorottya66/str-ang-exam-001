import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from '../hero.service';
import { Hero } from '../model/hero';

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.scss']
})
export class HeroDetailsComponent implements OnInit {
  hero: Hero | undefined;


  constructor(private ar: ActivatedRoute, 
    private hService: HeroService) { 
    this.ar.params.subscribe( params => {
this.hService.getOne(params.id).forEach( (hero: Hero | undefined) => {
  this.hero = hero;
});
    });
  }

  ngOnInit(){
  }

}
