import { State } from '../state';

export const increment = () => (state: State): State => ({
  ...state,
  count: state.count + 1,
});

export const decrement = () => (state: State): State => ({
  ...state,
  count: state.count - 1,
});
