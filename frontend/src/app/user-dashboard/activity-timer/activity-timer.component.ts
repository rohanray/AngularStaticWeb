import { Component, OnInit,OnDestroy } from '@angular/core';
import {ClockService} from "./clock.service";
import { Subscription } from 'rxjs';


@Component({
  selector: 'activity-timer',
  templateUrl: './activity-timer.component.html',
  styleUrls: ['./activity-timer.component.css']
})
export class ActivityTimerComponent implements OnInit, OnDestroy {
        
  private _clockSubscription: Subscription;
  time: Date;

  constructor(private clockService: ClockService) { }

  ngOnInit() {
      this._clockSubscription = this.clockService.getClock().subscribe(time => this.time = time);
  }
    
  ngOnDestroy(): void {
    this._clockSubscription.unsubscribe();
  }

}
