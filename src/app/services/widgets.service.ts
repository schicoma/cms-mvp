import { Injectable } from '@angular/core';
import { Widget } from '../models/widget';
import { myWidgets } from './example-widgets';

@Injectable({
  providedIn: 'root'
})
export class WidgetsService {

  constructor() {

    // Save widgets to local storage
    if (localStorage.getItem('widgets') === null) {
      localStorage.setItem('widgets', JSON.stringify(myWidgets));
    }

  }

  getData(): Widget[] {
    return JSON.parse(localStorage.getItem('widgets')!);
  }

  setData(widgets: Widget[]) {
    localStorage.setItem('widgets', JSON.stringify(widgets));
  }
}
