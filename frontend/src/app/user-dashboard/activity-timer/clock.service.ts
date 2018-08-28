import { Injectable } from '@angular/core';
import { Observable,interval } from 'rxjs';
import { map, share} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ClockService {

  private clock: Observable<Date>;
  dateNow: Date;

  constructor() {
    this.dateNow = new Date();
    this.dateNow.setMinutes(0);
    this.dateNow.setHours(0)
    this.dateNow.setSeconds(0);
    this.clock = interval(1000).pipe(map(tick => new Date()));//.share();
  }

  getClock(): Observable<Date> {
    return this.clock;
  } 

  getZeroHourClock(): Date {
    this.dateNow = new Date();
    this.dateNow.setMinutes(0);
    this.dateNow.setHours(0)
    this.dateNow.setSeconds(0);
    return this.dateNow;
  }
}
