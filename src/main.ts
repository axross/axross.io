import { createBrowserHistory } from 'history';
import { createElement } from 'react';
import { hydrate, render } from 'react-dom';
import { Store } from 'repatch';
import State from './core/State';
import initialState from './initialState';
import theme from './theme';
import Root from './Root';
import patchGlobalStyle from './patchGlobalStyle';

window.addEventListener('DOMContentLoaded', () => {
  const history = createBrowserHistory();
  const store = new Store<State>({ ...initialState });
  const dependency = { store };

  let isRendered = false;
  const container = document.getElementById('app');
  const update = (state: State) => {
    const element = createElement(Root, { history, dependency, state, theme });

    if (!isRendered) {
      isRendered = true;

      render(element, container);

      return;
    }

    hydrate(element, container);
  };

  store.subscribe(() => update(store.getState()));
  history.listen(() => update(store.getState()));

  patchGlobalStyle(theme);

  update(store.getState());
});
