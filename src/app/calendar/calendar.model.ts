export class Calendar {
  month: string;
  year: number;
  numberOfDays: number;

  constructor(month: string, year: number, numOfDays: number, ) {
    this.month = month;
    this.year = year;
    this.numberOfDays = numOfDays;
  }
}


/*
  * Determine the week day that first day of the month falls on
      new Date(year, month, 1).getDay()
  * Determine max number of days of the month i.e 30, 31, 28, 29
      new Date(year, month + 1, 0).getDate()
  * Determine max number of days of previous month
      new Date(year, month , 0).getDate()
  * start from 1 and populate the data blocks with numbers upto month last day
*/
