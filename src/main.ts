import { initializeApp } from 'firebase';
import 'firebase/firestore';
import { createBrowserHistory } from 'history';
import { createElement } from 'react';
import { hydrate, render } from 'react-dom';
import { Store } from 'repatch';
import JobExperienceRepository from './repository/JobExperienceRepository';
import { initialState, State } from './state';
import Root from './Root';

window.addEventListener('DOMContentLoaded', () => {
  const config = (window as any).__config__;
  const history = createBrowserHistory();
  const store = new Store<State>(initialState);

  const firebaseApp = initializeApp({
    projectId: config.FIREBASE_PROJECT_ID,
    apiKey: config.FIREBASE_API_KEY,
  });

  const jobExperienceRepository = new JobExperienceRepository({ firestore: firebaseApp.firestore() });

  let isRendered = false;
  const container = document.getElementById('app');
  const update = (state: State) => {
    const element = createElement(Root, { history, store, jobExperienceRepository, state });

    if (!isRendered) {
      isRendered = true;

      render(element, container);

      return;
    }

    hydrate(element, container);
  };

  store.subscribe(() => update(store.getState()));
  history.listen(() => update(store.getState()));

  update(store.getState());
});
