import { firestore } from 'firebase';
import { DateTime } from 'luxon';
import JobExperience from '../entity/JobExperience';
import Markdown from '../entity/Markdown';

type Unsubscribe = () => void;

class JobExperienceRepository {
  private readonly firestore: firestore.Firestore;

  constructor({ firestore }: { firestore: firestore.Firestore }) {
    this.firestore = firestore;
  }

  public subscribe = (onChange: (jobExperiences: JobExperience[]) => void): Unsubscribe => {
    const unsubscribe = this.firestore
      .collection('jobExperiences')
      .orderBy('endedAt', 'desc')
      .orderBy('startedAt', 'desc')
      .limit(100)
      .onSnapshot(snapshot => {
        const data = snapshot.docs.map(doc => toJobExperience(doc.data()));

        onChange(data as any);

        console.log(data);
      });

    return unsubscribe;
  };
}

const toJobExperience = (data: any): JobExperience => {
  const obj = { ...data };
  const { startedAt, endedAt, employee, title, summary } = obj;

  if (typeof employee !== 'string') throw new Error();
  if (typeof title !== 'string') throw new Error();
  if (typeof summary !== 'string') throw new Error();

  return new JobExperience({
    startedAt: DateTime.fromJSDate(startedAt),
    endedAt: DateTime.fromJSDate(endedAt),
    employee,
    title,
    summary: toMarkdown(summary),
  });
};

const toMarkdown = (data: any): Markdown => {
  if (typeof data !== 'string') throw new Error();

  return new Markdown({ source: data });
};

export default JobExperienceRepository;
