import { firestore } from 'firebase';
import { DateTime } from 'luxon';
import WorkExperience from '../entity/WorkExperience';

type Unsubscribe = () => void;

class WorkExperienceRepository {
  private readonly firestore: firestore.Firestore;

  constructor({ firestore }: { firestore: firestore.Firestore }) {
    this.firestore = firestore;
  }

  public subscribe = (onChange: (workExperiences: WorkExperience[]) => void): Unsubscribe => {
    const unsubscribe = this.firestore
      .collection('workExperiences')
      .orderBy('endedAt', 'desc')
      .orderBy('startedAt', 'desc')
      .limit(100)
      .onSnapshot(snapshot => {
        const data = snapshot.docs.map(doc => toWorkExperience(doc.data()));

        onChange(data as any);

        console.log(data);
      });

    return unsubscribe;
  };
}

const toWorkExperience = (data: any): WorkExperience => {
  const obj = { ...data };
  const { startedAt, endedAt, employeeName, employeeThumbnailImageUrl, summary } = obj;

  if (typeof employeeName !== 'string') throw new Error();
  if (typeof employeeThumbnailImageUrl !== 'string') throw new Error();
  if (typeof summary !== 'string') throw new Error();

  return new WorkExperience({
    startedAt: DateTime.fromJSDate(startedAt),
    endedAt: endedAt ? DateTime.fromJSDate(endedAt) : null,
    employeeName,
    employeeThumbnailImageUrl,
    summary,
  });
};

export default WorkExperienceRepository;
