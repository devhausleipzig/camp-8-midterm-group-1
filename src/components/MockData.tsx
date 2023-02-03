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
const monthsInWords = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

class Seats {
  seats: SeatsType[];
  seatnum = 44;
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
  daysInFuture = 14;
  shortMonths = [4, 6, 9, 11];
  today: string;
  daysAvailable: string[];
  days: DayType[];
  constructor() {
    this.today = this.todaySet();
    this.daysAvailable = this.buildDays();
    this.days = this.createDays();
  }
  todaySet() {
    const Today = new Date();
    const [month, day, year] = Today.toLocaleString().split(",")[0].split("/");
    return `${day}-${month}-${year}`;
  }
  buildDays() {
    const returnArray: string[] = [this.today];
    for (let i = 0; i < this.daysInFuture; i++) {
      let [day, month, year] = returnArray[returnArray.length - 1]
        .split("-")
        .map((x) => Number(x));
      day += 1;
      if (day == 29 && month == 2) {
        day = 1;
        month = 3;
      } else if (day == 31 && this.shortMonths.includes(month)) {
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
    return returnArray.map((day) => {
      const variable = day.split("-");
      return `${variable[0]} ${monthsInWords[Number(variable[1]) - 1]}`;
    });
  }
  createDays() {
    const returnArray: DayType[] = [];
    this.daysAvailable.map((day) => {
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
