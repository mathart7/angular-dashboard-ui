import { AfterViewInit, Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  @Output() navbg = new EventEmitter();

  @ViewChild('selection') selection: ElementRef;


  constructor() { }

  ngOnInit(): void {

  }





}
