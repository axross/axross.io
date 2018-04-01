import { Store } from './state';
import JobExperienceRepository from './repository/JobExperienceRepository';

export type Dependency = {
  store: Store;
  jobExperienceRepository: JobExperienceRepository;
};
