import { DateTime } from 'luxon';

class WorkExperience {
  public readonly startedAt: DateTime;
  public readonly endedAt: DateTime | null;
  public readonly employeeName: string;
  public readonly employeeThumbnailImageUrl: string;
  public readonly summary: string;

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
