import glamorous from 'glamorous';
import { History } from 'history';
import { ClassAttributes, createElement } from 'react';
import { Broadcast } from 'react-broadcast';
import { Route, Router, Switch } from 'react-router';
import { Dependency } from './dependency';
import { State, Store } from './state';
import JobExperienceRepository from './repository/JobExperienceRepository';
import IndexPage from './view/connected/IndexPage';

type Props = ClassAttributes<HTMLElement> & {
  history: History;
  store: Store;
  jobExperienceRepository: JobExperienceRepository;
  state: State;
  className?: string;
};

const Root = ({ history, store, jobExperienceRepository, state, className }: Props) => (
  <Router history={history}>
    <Broadcast channel="dependency" value={{ store, jobExperienceRepository } as Dependency}>
      <Broadcast channel="state" value={state}>
        <_Root className={className}>
          <PageContent>
            <Switch>
              <Route path="/" component={IndexPage} />
            </Switch>
          </PageContent>
        </_Root>
      </Broadcast>
    </Broadcast>
  </Router>
);

const _Root = glamorous.div({});

const PageContent = glamorous.div({});

export default Root;
