import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductivityChartService {

  constructor(private http: HttpClient) { }

  getPendedWorkitems(userId: string): Observable<Array<any>> {
    const href = 'http://localhost:9080/eds/productivitychart';
    const requestUrl = `${href}?userId=${userId}`;
    return this.http.get<any>(requestUrl);
  }
}
