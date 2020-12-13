import { Observable, BehaviorSubject } from "rxjs";

export class Store<T> {
  readonly state$: Observable<T>;
  private _state$: BehaviorSubject<T>;

  protected constructor(initialState: T) {
    this._state$ = new BehaviorSubject<T>(initialState);
    this.state$ = this._state$.asObservable();
  }

  protected get state(): T {
    return this._state$.getValue();
  }

  protected setState(nextState: T): void {
    this._state$.next(nextState);
  }
}
