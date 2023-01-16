type Times =
  | "14:30"
  | "15:00"
  | "17:00"
  | "17:30"
  | "18:00"
  | "18:30"
  | "19:00"
  | "22:00";
type SeatsType = {
  seat: string;
  ocupied: boolean;
};
type Showings = {
  time: Times;
  seats: SeatsType[];
  isFull: () => boolean;
};
type DayType = {
  date: string;
  screenings: Showings[];
  isFull: () => boolean;
};

class Seats {
  seats: SeatsType[];
  seatnum = 4;
  constructor() {
    this.seats = this.populateSeats();
  }
  populateSeats() {
    let returnObject: SeatsType[] = [];
    for (let i = 0; i < this.seatnum; i++) {
      returnObject.push({
        seat: String(i),
        ocupied: Math.random() < 0.9 ? true : false,
      });
    }
    return returnObject;
  }
  isFull() {
    return this.seats.every((x) => x.ocupied == true);
  }
}
export class Screening {
  times = [
    "14:30",
    "15:00",
    "17:00",
    "17:30",
    "18:00",
    "18:30",
    "19:00",
    "22:00",
  ];
  showings: Showings[] = [];
  constructor() {
    this.times.map((time) => {
      const newseats = new Seats();
      this.showings.push({
        time: time as Times,
        seats: newseats.seats,
        isFull: () => {
          return newseats.seats.every((x) => x.ocupied == true);
        },
      });
    });
  }
}
export class Days {
  daysinfuture = 14;
  longmonths = [1, 3, 5, 7, 8, 10, 12];
  shortmonths = [4, 6, 9, 11];
  Today: string;
  daysavailable: string[];
  days: DayType[];
  constructor() {
    this.Today = this.today();
    this.daysavailable = this.buildDays();
    this.days = this.createDays();
  }
  today() {
    const Today = new Date();
    const [month, day, year] = Today.toLocaleString().split(",")[0].split("/");
    return `${day}-${month}-${year}`;
  }
  buildDays() {
    const returnArray: string[] = [this.Today];
    for (let i = 0; i < this.daysinfuture; i++) {
      let [day, month, year] = returnArray[returnArray.length - 1]
        .split("-")
        .map((x) => Number(x));
      day += 1;
      if (day == 29 && month == 2) {
        day = 1;
        month = 3;
      } else if (day == 31 && this.shortmonths.includes(month)) {
        day = 1;
        month += 1;
      } else if (day == 32) {
        day = 1;
        month += 1;
      } else if (month == 13) {
        month = 1;
        year += 1;
      }
      returnArray.push(`${String(day)}-${String(month)}-${String(year)}`);
    }
    return returnArray;
  }
  createDays() {
    const returnArray: DayType[] = [];
    this.daysavailable.map((day) => {
      const newDay = new Screening();
      returnArray.push({
        date: day,
        screenings: newDay.showings,
        isFull: () => {
          return newDay.showings.every((x) => x.isFull() == true);
        },
      });
    });
    return returnArray;
  }
}
