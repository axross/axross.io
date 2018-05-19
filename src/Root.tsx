import { ThemeProvider } from 'emotion-theming';
import { History } from 'history';
import { ClassAttributes, createElement } from 'react';
import { Route, Router, Switch } from 'react-router';
import Dependency from './core/Dependency';
import State from './core/State';
import Theme from './core/Theme';
import IndexPage from './view/page/IndexPage';
import { Provider as DependencyProvider } from './view/context/dependency';
import { Provider as StateProvider } from './view/context/state';

type Props = ClassAttributes<HTMLElement> & {
  dependency: Dependency;
  history: History;
  state: State;
  theme: Theme;
  className?: string;
};

const Root = ({ history, dependency, state, theme, className }: Props) => (
  <Router history={history}>
    <ThemeProvider theme={theme}>
      <DependencyProvider value={dependency}>
        <StateProvider value={state}>
          <div className={className}>
            <Switch>
              <Route path="/" component={IndexPage} />
            </Switch>
          </div>
        </StateProvider>
      </DependencyProvider>
    </ThemeProvider>
  </Router>
);

export default Root;
