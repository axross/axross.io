import { createElement } from 'react';
import { Subscriber } from 'react-broadcast';
import { Dependency } from '../../dependency';
import State from '../../core/State';
import { decrement, increment } from '../../thunk/count';
import Bind from '../component/Bind';
import IndexPage from '../page/IndexPage';

const Connected = () => (
  <Subscriber channel="dependency">
    {({ store, workExperienceRepository }: Dependency) => (
      <Subscriber channel="state">
        {(state: State) => (
          <Bind subscribe={workExperienceRepository.subscribe}>
            {workExperiences => (
              <IndexPage
                workExperiences={workExperiences || []}
                count={state.count}
                onClickIncrement={() => store.dispatch(increment())}
                onClickDecrement={() => store.dispatch(decrement())}
              />
            )}
          </Bind>
        )}
      </Subscriber>
    )}
  </Subscriber>
);

export default Connected;
