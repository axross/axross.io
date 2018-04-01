import { createElement } from 'react';
import { Subscriber } from 'react-broadcast';
import { Dependency } from '../../dependency';
import { State } from '../../state';
import { decrement, increment } from '../../thunk/count';
import Bind from '../component/Bind';
import IndexPage from '../page/IndexPage';

const Connected = () => (
  <Subscriber channel="dependency">
    {({ store, jobExperienceRepository }: Dependency) => (
      <Subscriber channel="state">
        {(state: State) => (
          <Bind subscribe={jobExperienceRepository.subscribe}>
            {jobExperiences => (
              <IndexPage
                jobExperiences={jobExperiences || []}
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
