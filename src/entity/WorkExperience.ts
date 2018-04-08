import { DateTime } from 'luxon';

class WorkExperience {
  public readonly startedAt: DateTime;
  public readonly endedAt: DateTime | null;
  public readonly employeeName: string;
  public readonly employeeThumbnailImageUrl: string;
  public readonly summary: string;

  public compare = (other: WorkExperience): number => {
    const thisEndedAtAsNumber = this.endedAt === null ? Number.MAX_SAFE_INTEGER : this.endedAt.valueOf();
    const otherEndedAtAsNumber = other.endedAt === null ? Number.MAX_SAFE_INTEGER : other.endedAt.valueOf();

    const comparedWithEndedAt = thisEndedAtAsNumber - otherEndedAtAsNumber;

    if (comparedWithEndedAt === 0) {
      return this.startedAt.valueOf() - other.startedAt.valueOf();
    } else {
      return comparedWithEndedAt;
    }
  };

  constructor({
    startedAt,
    endedAt,
    employeeName,
    employeeThumbnailImageUrl,
    summary,
  }: {
    startedAt: DateTime;
    endedAt: DateTime | null;
    employeeName: string;
    employeeThumbnailImageUrl: string;
    summary: string;
  }) {
    this.startedAt = startedAt;
    this.endedAt = endedAt;
    this.employeeName = employeeName;
    this.employeeThumbnailImageUrl = employeeThumbnailImageUrl;
    this.summary = summary;
  }
}

export default WorkExperience;
