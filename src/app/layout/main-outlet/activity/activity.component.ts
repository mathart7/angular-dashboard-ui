import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {

  state = false;

  constructor() { }

  ngOnInit(): void {
  }

  on() {
    this.state = true;
  }

  off() {
    this.state = false;
  }

}
