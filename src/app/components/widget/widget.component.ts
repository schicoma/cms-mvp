import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Widget } from 'src/app/models/widget';

@Component({
  selector: 'app-widget',
  template: 'it works',
  styleUrls: ['./widget.component.scss']
})
export class WidgetComponent implements OnInit {

  @Input() edit: boolean;
  @Input() widget: Widget;
  
  @Output() onRemove: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  remove() {
    this.onRemove.emit(this.widget);
  }

}
