import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Hero }         from '../hero';
import { HeroStore } from '../hero.store';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: [ './hero-detail.component.css' ]
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero;

  hero$ = this.store.hero$;

  constructor(
    private route: ActivatedRoute,
    private store: HeroStore,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.store.getHero(id);
  }

  goBack(): void {
    this.location.back();
  }

 save(hero): void {
    this.store.updateHero(hero, (res:any) => {
      this.goBack();
    });
  }
}
