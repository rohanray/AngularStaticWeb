import { Component,OnInit,ViewEncapsulation } from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import {HttpClient} from '@angular/common/http';
import {merge, Observable, of as observableOf} from 'rxjs';
import {catchError, map, startWith, switchMap} from 'rxjs/operators';

import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  userServiceData: any;

  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'My Productivity', cols: 1, rows: 1 },
          { title: 'Pend Box', cols: 2, rows: 1 }
        ];
      }

      return [
        { title: 'My Productivity', cols: 1, rows: 1 },
        { title: 'Pend Box', cols: 2, rows: 1 }
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver,private http: HttpClient) {}

  private myProductivityChartData: Array<any>;
  userService: UserService | null;


  ngOnInit() {
    this.userService = new UserService(this.http);
    merge()
      .pipe(
        startWith({}),
        switchMap(() => {
          return this.userService!.getDailyProductivityInfo("");
        }),
        map(data => {
          return data;
        }),
        catchError(() => {          
          return observableOf([]);
        })
      ).subscribe(data => this.userServiceData = data);   
  }  

}
