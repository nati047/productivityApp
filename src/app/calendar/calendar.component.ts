import { Component, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'prodApp-calendar',
  standalone: false,

  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.css'
})
export class CalendarComponent {
  dayName: string[] = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
  days: number[] = Array.from({ length: 35 }, (_, i) => i + 1);

  constructor() {}

}
