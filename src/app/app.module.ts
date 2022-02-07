import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routin.module';
import { AppComponent } from './app.component';

import { ComponentsModule } from './components/components.module';

import { GotyComponent } from './pages/goty/goty.component';
import { InitComponent } from './pages/init/init.component';

@NgModule({
  declarations: [
    AppComponent,
    InitComponent,
    GotyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
