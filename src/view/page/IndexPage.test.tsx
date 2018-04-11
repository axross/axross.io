import { shallow } from 'enzyme';
import { DateTime } from 'luxon';
import { createElement } from 'react';
import Expertise from '../../entity/Expertise';
import WorkExperience from '../../entity/WorkExperience';
import IndexPage from './IndexPage';

describe('<IndexPage>', () => {
  test('it matches with the previous snapshot', () => {
    const expertises = [new Expertise({ type: 'TYPESCRIPT' }), new Expertise({ type: 'NODEJS' })];
    const introduction =
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
    const workExperiences = [
      new WorkExperience({
        startedAt: DateTime.fromMillis(0, { locale: 'utc' }),
        endedAt: DateTime.fromMillis(0, { locale: 'utc' }),
        employeeName: 'Eighty Three, Inc.',
        employeeThumbnailImageUrl: 'https://eighty-three.co.jp/',
        summary: 'Yeah',
      }),
    ];

    const rendered = shallow(
      <IndexPage expertises={expertises} introduction={introduction} workExperiences={workExperiences} />,
    );

    expect(rendered).toMatchSnapshot();
  });
});
