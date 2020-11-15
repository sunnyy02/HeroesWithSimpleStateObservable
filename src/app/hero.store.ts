import { Injectable } from "@angular/core";
import { of } from 'rxjs/observable/of';
import { map } from "rxjs/operators";
import { deepCopy } from './clone.function';
import { Hero } from "./hero";
import { HeroApiService } from "./hero.api.service";
import { Store } from "./store";

export class HeroState {
  heroes: Hero[] = [];
  hero: Hero;
  searchResult: Hero[] =[];
}
@Injectable()
export class HeroStore extends Store<HeroState> {
  heroes$ = this.state$.pipe(map((x) => x.heroes));

  hero$ = this.state$.pipe(map((x) => x.hero));

  searchResult$ = this.state$.pipe(map(x=> x.searchResult));

  constructor(private heroApi: HeroApiService) {
    super(new HeroState());
  }

  async loadAll() {
    const heroes = await this.heroApi.loadAll();
    this.setState({
      ...this.state,
      heroes: heroes,
    });
  }

  async getHero(id: number) {
    const hero = await this.heroApi.getHero(id);
    this.setState({
      ...this.state,
      hero: hero,
    });
  }

  async updateHero(hero: Hero, savedHero: (resp: Hero) => void) {
    (await this.heroApi.save(hero)).subscribe(async response => {
      console.log('after save', hero);
      this.setState({
        ...this.state,
        hero: hero,
      });
      savedHero(hero);
    });

  }

  async add(hero: Hero) {
    return (await this.heroApi.add(hero)).subscribe((response) => {
      console.log('response', response);
      this.setState({
        ...this.state,
        heroes: [...this.state.heroes, response],
      });
    });
  }
  async delete(hero: Hero) {
    return (await this.heroApi.delete(hero)).subscribe((response) => {
      const tobeDeletedIndex = this.state.heroes.findIndex((element) => {
        return element.id === hero.id;
      });
      if (!response) {
        const currentHeroes = deepCopy(this.state.heroes);
        currentHeroes.splice(tobeDeletedIndex, 1);
        this.setState({ ...this.state, heroes: currentHeroes });
      }
    });
  }

  async searchHeroes(term: string){
    console.log('term', term);
    const heroes = await this.heroApi.search(term);
    console.log('search heroes', heroes);
    this.setState({
      ...this.state,
      searchResult: heroes,
    });
  }
}
