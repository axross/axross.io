import { Store as _Store } from 'repatch';
import Attitude from '../entity/Attitude';
import Expertise from '../entity/Expertise';
import WorkExperience from '../entity/WorkExperience';

type State = {
  name: string;
  title: string;
  expertises: Expertise[];
  attitudes: Attitude[];
  introduction: string;
  workExperiences: WorkExperience[];
};

export type Store = _Store<State>;

export default State;
