import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HeroService } from '../hero.service';
import { Hero } from '../model/hero';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  heroList: Observable<Hero[]> | undefined;
 
constructor(private hService: HeroService,
  private router: Router
  ) { 
  this.heroList = this.hService.getAll();
}

  ngOnInit(): void {
  }

jumoToGero(hero: Hero): void {
this.router.navigateByUrl(`/hero/${hero.id}`);
}

}
