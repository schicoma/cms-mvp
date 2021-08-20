import { Component, Input, OnInit } from '@angular/core';
import { WidgetComponent } from '../widget/widget.component';

@Component({
  selector: 'app-widget-greetings',
  templateUrl: './widget-greetings.component.html',
  styleUrls: ['./../widget/widget.component.scss', './widget-greetings.component.scss']
})
export class WidgetGreetingsComponent extends WidgetComponent implements OnInit {

  @Input() loggedUserName: String;

  today: Date;

  constructor() {
    super();
  }

  ngOnInit(): void {
    this.today = new Date();
  }

}
