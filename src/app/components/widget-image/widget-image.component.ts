import { Component, Input, OnInit } from '@angular/core';
import { Widget } from 'src/app/models/widget';

@Component({
  selector: 'app-widget-image',
  templateUrl: './widget-image.component.html',
  styleUrls: ['./widget-image.component.scss']
})
export class WidgetImageComponent implements OnInit {

  @Input() edit: boolean;
  @Input() widget: Widget;

  constructor() { }

  ngOnInit(): void {
  }

}
