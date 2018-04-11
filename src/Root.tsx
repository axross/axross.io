import { ThemeProvider } from 'emotion-theming';
import { History } from 'history';
import { ClassAttributes, createElement } from 'react';
import { Broadcast } from 'react-broadcast';
import { Route, Router, Switch } from 'react-router';
import { Dependency } from './dependency';
import State, { Store } from './core/State';
import Theme from './core/Theme';
import IndexPage from './view/connected/IndexPage';

type Props = ClassAttributes<HTMLElement> & {
  history: History;
  store: Store;
  state: State;
  theme: Theme;
  className?: string;
};

const Root = ({ history, store, state, theme, className }: Props) => (
  <Router history={history}>
    <ThemeProvider theme={theme}>
      <Broadcast channel="dependency" value={{ store } as Dependency}>
        <Broadcast channel="state" value={state}>
          <div className={className}>
            <Switch>
              <Route path="/" component={IndexPage} />
            </Switch>
          </div>
        </Broadcast>
      </Broadcast>
    </ThemeProvider>
  </Router>
);

export default Root;
