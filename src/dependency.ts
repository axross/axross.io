import { Store } from './core/State';
import WorkExperienceRepository from './repository/WorkExperienceRepository';

export type Dependency = {
  store: Store;
  workExperienceRepository: WorkExperienceRepository;
};
