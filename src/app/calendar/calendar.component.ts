import { Component } from '@angular/core';

type DataObject  = {
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
  filter : string = 'all';
  data: DataObject[] = [
    {
      year: 2024,
      month: 11,
      day: 1,
      activity: "code",
    },
    {
      year: 2024,
      month: 11,
      day: 1,
      activity: "gym"
    },
    {
      year: 2024,
      month: 11,
      day: 2,
      activity: "code",
    },
    {
      year: 2024,
      month: 11,
      day: 2,
      activity: "book"
    },
    {
      year: 2024,
      month: 11,
      day: 30,
      activity: "gym",
    },
    {
      year: 2024,
      month: 11,
      day: 10,
      activity: "gym"
    },
    {
      year: 2024,
      month: 11,
      day: 16,
      activity: "gym",
    },
    {
      year: 2024,
      month: 11,
      day: 23,
      activity: "book"
    },
    {
      year: 2024,
      month: 11,
      day: 28,
      activity: "code"
    },
    {
      year: 2024,
      month: 11,
      day: 17,
      activity: "code"
    },
    {
      year: 2024,
      month: 11,
      day: 6,
      activity: "book"
    },
  ];

  filteredData: DataObject[] = [];

  constructor() {
    this.days = this.fillDays();
  }

  ngOnInit() {
    console.info(this.currentDate);
    this.applyFilter();
  }

  ngOnChnage() {
    alert("chnage detected");
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
    const lastDate = new Date(this.year, this.month + 1, 0).getDate();
    const startDay = new Date(this.year, this.month, 1).getDay();
    let dayOne = 0;
    return Array.from
    ({ length: 42 },
      (_, i) => {
        if (dayOne < lastDate && i >= startDay) {
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

  getEventOfDay(day: number) {
    const  dayDataObjectList = this.filteredData?.filter( val => val.year === this.year && val.month === this.month && val.day === day )
    const dayData = dayDataObjectList.map( data => data.activity);
    return dayData;
  }

  applyFilter() {
    if (this.filter === 'all')
      this.filteredData = this.data;
    else
      this.filteredData = this.data.filter( val => val.activity === this.filter);
  }

  changeFilter(filter: string) {
    this.filter = filter;
    this.applyFilter();
  }

  markActivity(date: number, markedActivity: string ) {
    console.info(`mark activity called - date ${date} markedActivity - ${markedActivity}`)
    if (this.filter === 'all' || date === 0)
      return;

    let updatedData: DataObject[] = [];
    const markedIndex = this.data.findIndex( value =>
        value.year === this.year &&
        value.day === date &&
        value.month === this.month &&
        markedActivity === value.activity
    );

    console.log(markedIndex);

    if (markedIndex > -1) {
      this.data.splice(markedIndex, 1);
      updatedData = [...this.data];
    } else {
      updatedData =
      [...this.data,
        {year: this.year, month: this.month, day: date, activity: markedActivity }
      ];
    }
    this.data = updatedData;
    this.applyFilter();
  }

}
