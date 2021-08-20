import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Widget } from 'src/app/models/widget';

@Component({
  selector: 'app-widget-text',
  templateUrl: './widget-text.component.html',
  styleUrls: ['./widget-text.component.scss']
})
export class WidgetTextComponent implements OnInit {

  @Input() edit: boolean;
  @Input() widget: Widget;

  htmlText: any;

  constructor(
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
    this.htmlText = this.sanitizer.bypassSecurityTrustHtml(this.widget.text!);
  }

  onContentChanged($event: any) {
    this.htmlText = this.sanitizer.bypassSecurityTrustHtml(this.widget.text!);
  }

}
