import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { WidgetsService } from 'src/app/services/widgets.service';
import { myWidgets } from '../../services/example-widgets';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  loggedUser: any;
  widgets = myWidgets;

  constructor(
    private authenticationService: AuthenticationService,
    private widgetsService: WidgetsService
  ) { }

  ngOnInit(): void {
    this.loggedUser = this.authenticationService.getLoggedUser();
    this.widgets = this.widgetsService.getData();
  }

}
