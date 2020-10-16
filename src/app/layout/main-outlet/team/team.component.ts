import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  state = false;
  search = '';

  constructor() { }

  ngOnInit(): void {
  }


  get iconState() {
    return {
      fal: true,
      'fa-th': this.state === true,
      'fa-list': this.state === false
    };
  }

  switchIcon() {
    this.state = !this.state;
  }

}
