import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { HeroStore } from '../hero.store';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  heroes$ = this.store.heroes$.pipe(
    map(x=> x.slice(0,4))
  )

  constructor(private store: HeroStore) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.store.loadAll();
  }
}
