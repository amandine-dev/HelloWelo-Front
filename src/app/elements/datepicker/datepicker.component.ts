import { Component, OnInit } from '@angular/core';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';


@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss']
})
export class DatepickerComponent implements OnInit {
  events: string[] = [];

  addEvent(type: string, event) {
    this.events.push(`${type}: ${event.value}`);
  }

  constructor() { }

  ngOnInit(): void {
  }
}


