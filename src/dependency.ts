import { Store } from './state';
import WorkExperienceRepository from './repository/WorkExperienceRepository';

export type Dependency = {
  store: Store;
  workExperienceRepository: WorkExperienceRepository;
};
