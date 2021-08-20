import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Widget } from 'src/app/models/widget';
import { WidgetComponent } from '../widget/widget.component';

@Component({
  selector: 'app-widget-text',
  templateUrl: './widget-text.component.html',
  styleUrls: ['./../widget/widget.component.scss', './widget-text.component.scss']
})
export class WidgetTextComponent extends WidgetComponent implements OnInit {

  htmlText: any;

  constructor(
    private sanitizer: DomSanitizer
  ) {
    super();
  }

  ngOnInit(): void {
    this.htmlText = this.sanitizer.bypassSecurityTrustHtml(this.widget.text!);
  }

  onContentChanged($event: any) {
    this.htmlText = this.sanitizer.bypassSecurityTrustHtml(this.widget.text!);
  }


}
