import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { MenuComponent } from './components/menu/menu.component';
import { VersionComponent } from './components/version/version.component';

@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    MenuComponent,
    VersionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
