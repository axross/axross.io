import { DateTime } from 'luxon';
import State from './core/State';
import Attitude, { AttitudeIconType } from './entity/Attitude';
import Expertise, { ExpertiseIconType } from './entity/Expertise';
import WorkExperience from './entity/WorkExperience';

const initialState: State = {
  name: '@axross',
  title: '👨‍💻 Frontend Developer',
  expertises: [
    new Expertise({ iconType: ExpertiseIconType.TYPESCRIPT, name: 'TypeScript' }),
    new Expertise({ iconType: ExpertiseIconType.REACT, name: 'React' }),
    new Expertise({ iconType: ExpertiseIconType.DART, name: 'Dart' }),
    new Expertise({ iconType: ExpertiseIconType.FLUTTER, name: 'Flutter' }),
    new Expertise({ iconType: ExpertiseIconType.GRAPHQL, name: 'GraphQL' }),
    new Expertise({ iconType: ExpertiseIconType.JAVASCRIPT, name: 'JavaScript' }),
    new Expertise({ iconType: ExpertiseIconType.NODEJS, name: 'Node' }),
    new Expertise({ iconType: ExpertiseIconType.HTML, name: 'HTML' }),
    new Expertise({ iconType: ExpertiseIconType.CSS, name: 'CSS' }),
  ],
  attitudes: [
    new Attitude({
      name: 'Both of *-side',
      iconType: AttitudeIconType.CLIENT_AND_SERVER,
      description:
        'We have to figure out server-side as well as client-side. Even though my specialty is client-side but I also have plenty of knowledge of server-side.',
    }),
    new Attitude({
      name: 'User Centered',
      iconType: AttitudeIconType.CODE_FOR_USER,
      description:
        'Software should be made for users. I keep in mind thinking of users while structuring user interface even to naming identifiers.',
    }),
    new Attitude({
      name: 'OSS Style',
      iconType: AttitudeIconType.PULL_REQUEST,
      description:
        'As soon as I find some room for improvement, I write code and submit it as a pull request for code review, and then test it, build it, and deploy it.',
    }),
    new Attitude({
      name: 'Be Agile',
      iconType: AttitudeIconType.SPEEDOMETER,
      description:
        'I think objective feedbacks from users are more important than subjective our sense of accomplishment. Ilike to improve our software little by little and as agile.',
    }),
    new Attitude({
      name: 'As Robust',
      iconType: AttitudeIconType.BRICK,
      description:
        'Code which is not enough designed for application architecture will decline its productivity soon. I always write robust code to keep high productivity in the long run.',
    }),
    new Attitude({
      name: 'Keep Clean',
      iconType: AttitudeIconType.CLEAN,
      description: 'Code ages as same as cells. But we can refactor it to rejuvenate. I never leave code untidy.',
    }),
  ],
  introduction:
    "Hello, my name is Kohei Asai a.k.a @axross. I'm currently working at Kaizen Platform, Inc. as a frontend developer. I'm an expert at building single page applications.",
  workExperiences: [
    new WorkExperience({
      employeeName: 'Kaizen Platform, Inc.',
      employeeThumbnailImageUrl:
        'https://firebasestorage.googleapis.com/v0/b/axross-io.appspot.com/o/workExperience%2Fkaizen_platform.png?alt=media&token=b46080cb-69db-46da-821e-739ab7ed94fb',
      endedAt: null,
      startedAt: DateTime.fromISO('2016-11-01T00:00:00+0900'),
      summary:
        "リードエンジニアとして広告クリエイティブを扱うSaaSを作っています。フロントエンドはReactによるシングルページアプリケーションとして構築されていて、バックエンドであるRailsアプリケーションとはGraphQLで通信しています。多言語化、 は日本語と英語に対応しており、I'm lead engineer of SaaS  web application Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
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
