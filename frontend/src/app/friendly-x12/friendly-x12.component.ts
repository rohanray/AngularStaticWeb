import { Component, OnInit } from '@angular/core';
import x12Meta from './x12-gtm';

@Component({
  selector: 'app-friendly-x12',
  templateUrl: './friendly-x12.component.html',
  styleUrls: ['./friendly-x12.component.css']
})
export class FriendlyX12Component implements OnInit {
  constructor() {
    x12Meta.HeaderGroups.map(hGroup => {
      console.log(hGroup.Id);
    });
  }

  ngOnInit() {}
}
