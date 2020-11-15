import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Hero } from '../../hero';
import { HeroStore } from '../../hero.store';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.css']
})
export class HeroSearchComponent implements OnInit {
  heroes$: Observable<Hero[]> = this.store.searchResult$;

  private searchTerms = new Subject<string>();

  constructor(private store: HeroStore) { }

  // Push a search term into the observable stream.
  search(term: string): void {
    this.store.searchHeroes(term)
  }

  ngOnInit(): void {}

}
