import { DateTime } from 'luxon';
import Markdown from './Markdown';

class JobExperience {
  public readonly startedAt: DateTime;
  public readonly endedAt: DateTime;
  public readonly employee: string;
  public readonly title: string;
  public readonly summary: Markdown;

  constructor({
    startedAt,
    endedAt,
    employee,
    title,
    summary,
  }: {
    startedAt: DateTime;
    endedAt: DateTime;
    employee: string;
    title: string;
    summary: Markdown;
  }) {
    this.startedAt = startedAt;
    this.endedAt = endedAt;
    this.employee = employee;
    this.title = title;
    this.summary = summary;
  }
}

export default JobExperience;
