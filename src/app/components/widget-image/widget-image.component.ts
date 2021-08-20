import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Widget } from 'src/app/models/widget';
import { WidgetComponent } from '../widget/widget.component';

@Component({
  selector: 'app-widget-image',
  templateUrl: './widget-image.component.html',
  styleUrls: ['./../widget/widget.component.scss', './widget-image.component.scss']
})
export class WidgetImageComponent extends WidgetComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit(): void {

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
