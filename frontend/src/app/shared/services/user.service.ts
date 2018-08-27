import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Workitems} from './../models/workitems';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

   APP_URL = environment.host;
   
  
  getDailyProductivityInfo(userId: string): Observable<Array<any>> {
    const href = environment.host+'productivitychart';
    const requestUrl = `${href}?userId=${userId}`;
    return this.http.get<any>(requestUrl);
  }

  getAllWorkitems(sort: string, order: string, page: number, size: number): Observable<Workitems> {
    const href = environment.host+'pendedworkitems';
    const requestUrl = `${href}?sort=${sort}&order=${order}&page=${page + 1}&size=${size}`;
    return this.http.get<Workitems>(requestUrl);
  }
}
