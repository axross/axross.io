import { createElement } from 'react';
import IndexPage from '../page/IndexPage';
import { Consumer as StateConsumer } from '../context/state';

const Connected = () => (
  <StateConsumer>
    {state => (
      <IndexPage
        expertises={state.expertises}
        introduction={state.introduction}
        workExperiences={state.workExperiences}
      />
    )}
  </StateConsumer>
);

export default Connected;
