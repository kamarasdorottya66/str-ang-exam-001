import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  getOne(id: any) {
    throw new Error('Method not implemented.');
  }
  getAll(): import("rxjs").Observable<import("./model/hero").Hero[]> | undefined {
    throw new Error('Method not implemented.');
  }

  constructor() { }
}
