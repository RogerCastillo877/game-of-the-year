import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InitComponent } from './pages/init/init.component';
import { GotyComponent } from './pages/goty/goty.component';

@NgModule({
  declarations: [
    AppComponent,
    InitComponent,
    GotyComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
