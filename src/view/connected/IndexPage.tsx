import { createElement } from 'react';
import { Subscriber } from 'react-broadcast';
import State from '../../core/State';
import IndexPage from '../page/IndexPage';

const Connected = () => (
  <Subscriber channel="state">
    {(state: State) => <IndexPage expertises={state.expertises} workExperiences={state.workExperiences} />}
  </Subscriber>
);

export default Connected;
