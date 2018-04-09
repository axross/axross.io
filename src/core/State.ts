import { Store as _Store } from 'repatch';
import Expertise from '../entity/Expertise';
import WorkExperience from '../entity/WorkExperience';

type State = {
  expertises: Expertise[];
  workExperiences: WorkExperience[];
};

export type Store = _Store<State>;

export default State;
