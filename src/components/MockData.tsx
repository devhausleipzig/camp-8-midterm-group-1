type InputProps = {
  dateTolerance: number;
};
type Checker = {
  isFull:()=> boolean}
type Times =
  | "14:30"
  | "15:00"
  | "17:00"
  | "17:30"
  | "18:00"
  | "18:30"
  | "19:00"
  | "22:00";
type Seats = {
  seat:string,
  ocupied:boolean
}
type Showings = {
  time: Times;
  seats:Seats[]
}

type DayType = {
  isFull: () => boolean;
  Times: TimeFilm[];
};


class Screening {
  seats:Seats[]
  seatnum = 4;
  constructor(){
    this.seats = this.populateSeats()
  }
  populateSeats(){
    let returnObject:Seats[] = []
    for (let i = 0; i < this.seatnum; i++) {
      returnObject.push({seat:String(i), ocupied:false})
    }
    return returnObject
  }
  isFull(){
    return this.seats.every(x=>x.ocupied == true)
  };
  
}
class TimeFilm {
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
  showings:Screening[] = []
  constructor(){
    this.showings.push(this.times.map((x)=>{
      const bla = new Screening();
  populateShowings(){

  }
}


