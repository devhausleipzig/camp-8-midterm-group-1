export type InputProps = {
  dateTolerance: number;
};
type Checker = {
  isFull: () => boolean;
};
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
      returnObject.push({ seat: String(i), ocupied: false });
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
class Days {}
