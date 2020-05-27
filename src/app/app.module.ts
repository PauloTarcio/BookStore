import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { MenuPrincipalHorizontalComponent } from './shared/components/menu-principal-horizontal/menu-principal-horizontal.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuPrincipalHorizontalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
