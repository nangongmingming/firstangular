import { Component } from '@angular/core';
import { Hero } from './Hero';
import { HeroService } from './hero.service';
// export class Hero 
// {
//   id: number;
//   name: string;
// }

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',

  // template: `<h1>{{title}}</h1>
  //            <h2>{{hero}} 详情!</h2>`,

  styleUrls: ['./app.component.css']
 
})

export class AppComponent {
  title = 'Tour of Heroes';

  // hero: Hero =
  // {
  //   id: 631500000000,
  //   name: 'Windstorm'
  // };
  
  selectedHero: Hero;
  
  heroes: Hero[];

  constructor(private heroService: HeroService) {
    this.getheros();
   }
 
  onSelect(hero: Hero): void 
  {
    this.selectedHero = hero;
  }

  getheros():void
  {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }
}


