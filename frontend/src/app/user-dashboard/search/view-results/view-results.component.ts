import { Component, OnInit } from '@angular/core';
import ResultsData from './view-results.data';

@Component({
  selector: 'app-view-results',
  templateUrl: './view-results.component.html',
  styleUrls: ['./view-results.component.css']
})
export class ViewResultsComponent implements OnInit {
  dataSource = ResultsData;
  constructor() {}

  ngOnInit() {}
}
