import { Observable, BehaviorSubject } from "rxjs";

export class Store<T> {
  readonly state$: Observable<T>;
  private _state$: BehaviorSubject<T>;
  private previous: T;

  protected constructor(initialState: T) {
    this._state$ = new BehaviorSubject<T>(initialState);
    this.state$ = this._state$.asObservable();
  }

  get state(): T {
    return this._state$.getValue();
  }

  setState(nextState: T): void {
    console.log("next", nextState);
    this._state$.next(nextState);
  }
}
