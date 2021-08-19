import { Component, OnInit } from '@angular/core';
import { myWidgets } from './example-widgets';

const LOGGED_USER = {
  username: 'schicoma',
  name: 'Sebastian Chicoma'
};

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  loggedUser = LOGGED_USER;
  widgets = myWidgets;

  constructor() { }

  ngOnInit(): void {
  }

}
