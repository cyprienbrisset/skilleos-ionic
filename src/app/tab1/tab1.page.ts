import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  items: [object];

  constructor() {}

  ngOnInit() {
    this.items = [
      {label: 'demo', value: 'demo'}
    ];
  }
}
