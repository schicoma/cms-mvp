import { Component, Input, OnInit } from '@angular/core';
import { Widget } from 'src/app/models/widget';

@Component({
  selector: 'app-widget-greetings',
  templateUrl: './widget-greetings.component.html',
  styleUrls: ['./widget-greetings.component.scss']
})
export class WidgetGreetingsComponent implements OnInit {

  @Input()
  widget: Widget;

  @Input()
  loggedUserName: String;

  today: Date;

  constructor() {
    this.today = new Date();
  }

  ngOnInit(): void {
  }

}
