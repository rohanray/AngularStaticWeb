import {Component, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MatPaginator, MatSort} from '@angular/material';
import {merge, Observable, of as observableOf} from 'rxjs';
import {catchError, map, startWith, switchMap} from 'rxjs/operators';
import { Router } from '@angular/router';

import {Workitems} from './../models/workitems';
import {Workitem} from './../models/workitem';
import { PendboxService } from './pendbox.service';

@Component({
  selector: 'pendbox-grid',
  templateUrl: './pendbox-grid.component.html',
  styleUrls: ['./pendbox-grid.component.css']
})
export class PendboxGridComponent implements OnInit {

  displayedColumns: string[] = ['claimId', 'workitemId', 'dateSubmitted', 'dueDate','status','queue','priority'];
  pendboxService: PendboxService | null;
  data: Workitem[] = [];

  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;

  pageSize = 5;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private http: HttpClient,private router: Router) {}

  ngOnInit() {
    this.pendboxService =  new PendboxService(this.http);

    this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);

    this.paginator.pageSize = this.pageSize;

    merge(this.sort.sortChange, this.paginator.page, this.paginator.pageSize)
      .pipe(
        startWith({}),
        switchMap(() => {
          this.isLoadingResults = true;
          return this.pendboxService!.getPendedWorkitems(
            this.sort.active, this.sort.direction, this.paginator.pageIndex, this.paginator.pageSize);
        }),
        map(data => {
          // Flip flag to show that loading has finished.
          this.isLoadingResults = false;
          this.isRateLimitReached = false;
          this.resultsLength = data.total_count;

          return data.items;
        }),
        catchError(() => {
          this.isLoadingResults = false;
          // Catch if the GitHub API has reached its rate limit. Return empty data.
          this.isRateLimitReached = true;
          return observableOf([]);
        })
      ).subscribe(data => this.data = data);
  }

  selectRow(row) {
    this.router.navigate(['newworkitem']);
    console.log(row);
  }

}
