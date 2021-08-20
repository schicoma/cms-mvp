import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Widget } from 'src/app/models/widget';

@Component({
  selector: 'app-widget-image',
  templateUrl: './widget-image.component.html',
  styleUrls: ['./widget-image.component.scss']
})
export class WidgetImageComponent implements OnInit {

  @Input() edit: boolean;
  @Input() widget: Widget;

  @Output() onRemove: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {

  }

  remove() {
    this.onRemove.emit(this.widget);
  }

  saveImage($event: any) {
    const file = $event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.widget.url = reader.result as string;
    };

  }

}
