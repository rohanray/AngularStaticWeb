import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import {Workitems} from './../models/workitems';

@Injectable({
  providedIn: 'root'
})
export class PendboxService {

  constructor(private http: HttpClient) { }

  getPendedWorkitems(sort: string, order: string, page: number, size:number): Observable<Workitems> {
    
    const href = 'http://localhost:9080/eds/pendedworkitems';
    const requestUrl = `${href}?sort=asc&order=1&page=1&size=${size}`;
    return this.http.get<Workitems>(requestUrl);
  }
}
