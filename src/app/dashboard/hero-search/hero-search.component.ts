import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Hero } from '../../hero';
import { HeroStore } from '../../hero.store';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.css']
})
export class HeroSearchComponent implements OnInit {
  heroes$: Observable<Hero[]> = this.store.searchResult$;

  constructor(private store: HeroStore) { }

  search(term: string): void {
    this.store.searchHeroes(term)
  }

  ngOnInit(): void {}

}
