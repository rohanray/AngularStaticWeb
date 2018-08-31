import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Input()
  diameter: number;
  startDate = new Date(2010, 0, 1);
  showSpinner = false;
  showResults = false;

  constructor() {}

  ngOnInit() {}

  submitSearch() {
    this.showSpinner = true;
    setTimeout(() => {
      this.showSpinner = false;
      this.showResults = true;
    }, 1500);
  }
}
