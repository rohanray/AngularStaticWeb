import { Component,OnInit,ViewEncapsulation } from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import {HttpClient} from '@angular/common/http';
import {merge, Observable, of as observableOf} from 'rxjs';
import {catchError, map, startWith, switchMap} from 'rxjs/operators';

import { ProductivityChartService } from './my-productivity-chart/productivity-chart.service';


@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit{
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
  productivityChartService: ProductivityChartService | null;


  ngOnInit() {
    this.productivityChartService = new ProductivityChartService(this.http);
    merge()
      .pipe(
        startWith({}),
        switchMap(() => {
          return this.productivityChartService!.getPendedWorkitems("");
        }),
        map(data => {
          return data;
        }),
        catchError(() => {          
          return observableOf([]);
        })
      ).subscribe(data => this.myProductivityChartData = data);   
  }  
}
