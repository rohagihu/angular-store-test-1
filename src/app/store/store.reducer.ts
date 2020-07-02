import { createReducer, on } from '@ngrx/store';
import { toggleMode } from './store.actions';

// export const initialState: string = 'dark';
export const initialState = {
  'mode': 'dark'
};

const _storeReducer = createReducer(initialState,
  // on(toggleMode, state => state === 'dark' ? 'light' : 'dark'),
  on(toggleMode, state => ({
    ...state,
    mode: state.mode === 'dark' ? 'light' : 'dark'})),
);

export function storeReducer(state, action) {
  return _storeReducer(state, action);
}
