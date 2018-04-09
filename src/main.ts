import { createBrowserHistory } from 'history';
import { createElement } from 'react';
import { hydrate, render } from 'react-dom';
import { Store } from 'repatch';
import State from './core/State';
import initialState from './initialState';
import Root from './Root';
import patchGlobalStyle from './patchGlobalStyle';

window.addEventListener('DOMContentLoaded', () => {
  const history = createBrowserHistory();
  const store = new Store<State>(initialState);

  let isRendered = false;
  const container = document.getElementById('app');
  const update = (state: State) => {
    const element = createElement(Root, { history, store, state });

    if (!isRendered) {
      isRendered = true;

      render(element, container);

      return;
    }

    hydrate(element, container);
  };

  store.subscribe(() => update(store.getState()));
  history.listen(() => update(store.getState()));

  patchGlobalStyle();

  update(store.getState());
});
