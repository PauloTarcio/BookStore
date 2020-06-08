import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { MainHorizontalNavComponent } from './shared/components/main-horizontal-nav/main-horizontal-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    MainHorizontalNavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
