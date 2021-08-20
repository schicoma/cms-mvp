import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Widget } from 'src/app/models/widget';

@Component({
  selector: 'app-widget-greetings',
  templateUrl: './widget-greetings.component.html',
  styleUrls: ['./widget-greetings.component.scss']
})
export class WidgetGreetingsComponent implements OnInit {

  @Input() edit: boolean;
  @Input() loggedUserName: String;
  @Input() widget: Widget;

  @Output() onRemove: EventEmitter<any> = new EventEmitter();

  today: Date;

  constructor() {
    this.today = new Date();
  }

  ngOnInit(): void {
  }

  remove() {
    this.onRemove.emit(this.widget);
  }

}
