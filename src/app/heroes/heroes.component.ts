import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Hero } from '../hero';
import { HeroStore } from '../hero.store';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes$: Observable<Hero[]> = this.store.heroes$;

  constructor(private store: HeroStore) {
  }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
     this.store.loadAll();
  }

  add(name: string): void {
    name = name.trim();
    if (!name) {
      return;
    }
    this.store.add({ name: name } as Hero);
  }

  delete(hero: Hero): void {
    this.store.delete(hero);
  }
}
