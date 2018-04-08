import { createElement } from 'react';
import { Subscriber } from 'react-broadcast';
import { Dependency } from '../../dependency';
import State from '../../core/State';
import { decrement, increment } from '../../thunk/count';
import IndexPage from '../page/IndexPage';

const Connected = () => (
  <Subscriber channel="dependency">
    {({ store }: Dependency) => (
      <Subscriber channel="state">
        {(state: State) => (
          <IndexPage
            expertises={state.expertises}
            workExperiences={state.workExperiences}
            count={state.count}
            onClickIncrement={() => store.dispatch(increment())}
            onClickDecrement={() => store.dispatch(decrement())}
          />
        )}
      </Subscriber>
    )}
  </Subscriber>
);

export default Connected;
