import { DateTime } from 'luxon';
import State from './core/State';
import Expertise from './entity/Expertise';
import WorkExperience from './entity/WorkExperience';

const initialState: State = {
  count: 0,
  expertises: [
    new Expertise({ type: 'TYPESCRIPT' }),
    new Expertise({ type: 'REACT' }),
    new Expertise({ type: 'DART' }),
    new Expertise({ type: 'FLUTTER' }),
    new Expertise({ type: 'GRAPHQL' }),
    new Expertise({ type: 'JAVASCRIPT' }),
    new Expertise({ type: 'NODEJS' }),
    new Expertise({ type: 'HTML' }),
    new Expertise({ type: 'CSS' }),
  ],
  workExperiences: [
    new WorkExperience({
      employeeName: 'Kaizen Platform, Inc.',
      employeeThumbnailImageUrl:
        'https://firebasestorage.googleapis.com/v0/b/axross-io.appspot.com/o/workExperience%2Fkaizen_platform.png?alt=media&token=b46080cb-69db-46da-821e-739ab7ed94fb',
      endedAt: null,
      startedAt: DateTime.fromISO('2016-11-01T00:00:00+0900'),
      summary:
        'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
    }),
    new WorkExperience({
      employeeName: 'Gunosy, Inc.',
      employeeThumbnailImageUrl:
        'https://firebasestorage.googleapis.com/v0/b/axross-io.appspot.com/o/workExperience%2Fgunosy.png?alt=media&token=b6dd0d1b-6e8d-4b87-82dd-c00dda03a67f',
      endedAt: DateTime.fromISO('2016-07-31T00:00:00+0900'),
      startedAt: DateTime.fromISO('2015-08-01T00:00:00+0900'),
      summary:
        'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
    }),
    new WorkExperience({
      employeeName: 'TriFort, Inc.',
      employeeThumbnailImageUrl:
        'https://firebasestorage.googleapis.com/v0/b/axross-io.appspot.com/o/workExperience%2Ftrifort.png?alt=media&token=aebbfc70-046b-456a-9a17-33e910a5ae44',
      endedAt: DateTime.fromISO('2015-07-31T00:00:00+0900'),
      startedAt: DateTime.fromISO('2014-05-01T00:00:00+0900'),
      summary:
        'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
    }),
  ],
};

export default initialState;
