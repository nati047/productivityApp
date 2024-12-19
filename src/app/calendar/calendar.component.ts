import { Component, SimpleChange, SimpleChanges } from '@angular/core';

interface DataObject {
    year: number,
    month: number,
    day: number,
    activity: string
}

@Component({
  selector: 'prodApp-calendar',
  standalone: false,
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.css'
})
export class CalendarComponent {
  currentDate: Date = new Date(new Date().getFullYear(), new Date().getMonth());
  days!: number[] ;
  month: number = this.currentDate.getMonth();
  year: number = this.currentDate.getFullYear();
  data: DataObject[] = [
    {
      year: 2025,
      month: 1,
      day: 23,
      activity: "gym",
    },
    {
      year: 2025,
      month: 1,
      day: 1,
      activity: "gym"
    },
    {
      year: 2025,
      month: 1,
      day: 2,
      activity: "gym",
    },
    {
      year: 2025,
      month: 1,
      day: 13,
      activity: "gym"
    },
    {
      year: 2025,
      month: 1,
      day: 30,
      activity: "gym",
    },
    {
      year: 2025,
      month: 1,
      day: 10,
      activity: "gym"
    },
    {
      year: 2025,
      month: 1,
      day: 16,
      activity: "gym",
    },
    {
      year: 2025,
      month: 1,
      day: 28,
      activity: "gym"
    },
  ];

  constructor() {
    this.days = this.fillDays();
  }

  ngOnInit() {
    console.info(this.currentDate);
  }

  getDayNames() {
    return [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  }

   getMonthName(monthNumber: number) {
    const monthNames = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    return monthNames[monthNumber];
  }

  fillDays() {
    let maxDay = new Date(this.year, this.month + 1, 0).getDate();
    let startIndex = new Date(this.year, this.month, 1).getDay();
    let dayOne = 0;
    return Array.from
    ({ length: 42 },
      (_, i) => {
        if (dayOne !== maxDay && i >= startIndex) {
          dayOne += 1;
          return dayOne;
        }
        else {
          return 0;
        }
      }
    );
  }

  toNextMonth () {
    this.currentDate.setMonth(this.currentDate.getMonth() + 1);
    this.month = this.currentDate.getMonth();
    this.year = this.currentDate.getFullYear();
    this.days = this.fillDays();
    console.log(this.currentDate);
  }

  toPreviousMonth () {
    this.currentDate.setMonth(this.currentDate.getMonth() - 1);
    this.month = this.currentDate.getMonth();
    this.year = this.currentDate.getFullYear();
    this.days = this.fillDays();
    console.log(this.currentDate);
  }

  getDataOfDay(day: number) {
    let year: number = this.year;
    let monthString: string = this.getMonthName(this.month);

    // console.log(`monthString ${monthString} - type ${typeof(monthString)}`)
    let dayData = this.data?.find( val => val.year === this.year && val.month === this.month && val.day === day )
    console.log(dayData);
    return dayData?.activity || "";

  }
}
