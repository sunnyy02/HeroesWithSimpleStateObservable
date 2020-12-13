import { Injectable } from "@angular/core";
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
  public readonly heroes$ = this.state$.pipe(map((x) => x.heroes));

  public readonly hero$ = this.state$.pipe(map((x) => x.hero));

  public readonly searchResult$ = this.state$.pipe(map(x=> x.searchResult));

  constructor(private heroApi: HeroApiService) {
    super(new HeroState());
  }

  public async loadAll() {
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

  public async updateHero(hero: Hero, savedHero: (resp: Hero) => void) {
    (await this.heroApi.save(hero)).subscribe(async response => {
      this.setState({
        ...this.state,
        hero: hero,
      });
      savedHero(hero);
    });

  }

  public async add(hero: Hero) {
    return (await this.heroApi.add(hero)).subscribe((response) => {
      this.setState({
        ...this.state,
        heroes: [...this.state.heroes, response],
      });
    });
  }
  
  public async delete(hero: Hero) {
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

  public async searchHeroes(term: string){
    const heroes = await this.heroApi.search(term);
    this.setState({
      ...this.state,
      searchResult: heroes,
    });
  }
}
