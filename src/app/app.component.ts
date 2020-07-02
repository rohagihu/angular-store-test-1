import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { toggleMode } from './store/store.actions';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'storetest1';
  store$: Observable<any>;
  mode: string;

  constructor(private store: Store<{myStore: any}>) {
    this.store$ = store.pipe(select('myStore'));
    this.store$.subscribe(el => {
      this.mode = el.mode;
      console.log(el)
    })
  }

  toggleModeMethod() {
    this.store.dispatch(toggleMode());
  }

}
