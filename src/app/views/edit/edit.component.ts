import { Component, OnInit } from '@angular/core';
import { Widget } from 'src/app/models/widget';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { WidgetsService } from 'src/app/services/widgets.service';
import { myWidgets } from '../../services/example-widgets';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  loggedUser: any;
  widgets: Widget[];
  widgetsTemp: Widget[];

  edit = false;
  preview = false;

  constructor(
    private authenticationService: AuthenticationService,
    private widgetsService: WidgetsService
  ) { }

  ngOnInit(): void {
    this.loggedUser = this.authenticationService.getLoggedUser();

    this.widgets = this.widgetsService.getData();

    // save a copy of the widgets
    this.widgetsTemp = this.widgets.map(widget => { return { ...widget }; });
  }

  addWidget(type: string) {
    this.widgets.push({
      id: new Date().getTime(),
      type
    });
  }

  cancel() {
    this.edit = false;
    this.preview = false;

    // restore the widgets
    this.widgets = this.widgetsTemp.map(widget => { return { ...widget }; });
  }

  enableEdit() {
    this.edit = true;
  }

  previewWidgets() {
    this.preview = !this.preview;
  }

  removeWidget(widget: Widget, index: number) {
    this.widgets.splice(index, 1);
  }

  save() {
    this.edit = false;
    this.preview = false;

    // saving widgets
    this.widgetsTemp = this.widgets.map(widget => { return { ...widget }; });

    this.widgetsService.setData(this.widgets);
  }


}
