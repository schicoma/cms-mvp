import { Component, Input, OnInit } from '@angular/core';
import { Widget } from 'src/app/models/widget';

@Component({
  selector: 'app-widget-text',
  templateUrl: './widget-text.component.html',
  styleUrls: ['./widget-text.component.scss']
})
export class WidgetTextComponent implements OnInit {

  @Input() widget: Widget;

  constructor() { }

  ngOnInit(): void {
  }

}
