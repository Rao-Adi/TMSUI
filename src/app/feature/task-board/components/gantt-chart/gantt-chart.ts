import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-gantt-chart',
  imports: [CommonModule],
  templateUrl: './gantt-chart.html',
  styleUrl: './gantt-chart.css',
})
export class GanttChart implements OnInit {
  @Input() tasks: any[] = [];
  @Output() close = new EventEmitter<boolean>();

  closeModal() {
    this.close.emit(false);
  }
  view: 'day' | 'week' | 'month' = 'day';
  timeline: { label: string; start: Date; end: Date }[] = [];
  pxPerUnit = 30; // 1 day = 30px

  days: number[] = [];
  months: any[] = [];

  ngOnInit() {
    this.generateTimeline();
    this.calculateBars();
  }

  changeView(v: 'day' | 'week' | 'month') {
    this.view = v;
    this.generateTimeline();
    this.calculateBars();
  }

  generateTimeline() {
    this.timeline = [];

    let projectStart = new Date(
      Math.min(...this.tasks.map((t) => new Date(t.startDate).getTime())),
    );

    let projectEnd = new Date(Math.max(...this.tasks.map((t) => new Date(t.endDate).getTime())));

    let cursor = new Date(projectStart);

    while (cursor <= projectEnd) {
      if (this.view == 'day') {
        this.timeline.push({
          label: cursor.getDate().toString(),
          start: new Date(cursor),
          end: new Date(cursor),
        });

        cursor.setDate(cursor.getDate() + 1);
      } else if (this.view == 'week') {
        let start = new Date(cursor);
        let end = new Date(cursor);
        end.setDate(end.getDate() + 6);

        this.timeline.push({
          label: `${start.toLocaleDateString('en-US', { day: 'numeric', month: 'short' })}
        -
        ${end.toLocaleDateString('en-US', { day: 'numeric', month: 'short' })}`,
          start: start,
          end: end,
        });

        cursor.setDate(cursor.getDate() + 7);
      } else {
        let start = new Date(cursor);

        this.timeline.push({
          label: start.toLocaleDateString('en-US', { month: 'short' }),
          start: start,
          end: start,
        });

        cursor.setMonth(cursor.getMonth() + 1);
      }
    }

    this.months = [];

    let currentMonth = '';
    let startIndex = 0;

    this.timeline.forEach((d: any, i: number) => {
      let m = d.start.toLocaleString('default', { month: 'short', year: 'numeric' });

      if (m !== currentMonth) {
        if (currentMonth !== '') {
          this.months.push({
            label: currentMonth,
            start: startIndex,
            span: i - startIndex,
          });
        }

        currentMonth = m;
        startIndex = i;
      }

      if (i === this.timeline.length - 1) {
        this.months.push({
          label: currentMonth,
          start: startIndex,
          span: this.timeline.length - startIndex,
        });
      }
    });
  }

  calculateBars() {
    let projectStart = new Date(
      Math.min(...this.tasks.map((t) => new Date(t.startDate).getTime())),
    );

    this.tasks.forEach((task) => {
      let start = new Date(task.startDate);
      let end = new Date(task.endDate);

      let diffStart = this.getUnitDiff(projectStart, start);

      let duration = this.getUnitDiff(start, end);

      task.gridStart = Math.floor(diffStart) + 1;
      task.gridSpan = Math.max(1, Math.ceil(duration));
    });
  }

  getUnitDiff(start: Date, end: Date) {
    if (this.view === 'day') return (end.getTime() - start.getTime()) / 86400000;

    if (this.view === 'week') return (end.getTime() - start.getTime()) / (86400000 * 7);

    // month (REAL month diff)
    return (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth());
  }

  private getWeek(date: Date): number {
    const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));

    // Thursday in current week decides the year
    d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7));

    const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));

    const weekNo = Math.ceil(((d.getTime() - yearStart.getTime()) / 86400000 + 1) / 7);

    return weekNo;
  }
}
