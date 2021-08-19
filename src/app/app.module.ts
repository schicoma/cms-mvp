import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { EditComponent } from './views/edit/edit.component';
import { WidgetImageComponent } from './components/widget-image/widget-image.component';
import { WidgetTextComponent } from './components/widget-text/widget-text.component';
import { WidgetGreetingsComponent } from './components/widget-greetings/widget-greetings.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EditComponent,
    WidgetImageComponent,
    WidgetTextComponent,
    WidgetGreetingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
