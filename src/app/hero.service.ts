
import { Injectable } from '@angular/core';

import { Hero } from './hero';
import { HEROES } from './muck-heros';
 

@Injectable()
export class HeroService {
  constructor() { }
 // <> 为泛型
  getHeroes(): Promise<Hero[]>  {
    return Promise.resolve(HEROES);
  }
}