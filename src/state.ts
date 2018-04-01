import { Store as _Store } from 'repatch';

export type State = {
  count: number;
};

export type Store = _Store<State>;

export const initialState = {
  count: 0,
};
