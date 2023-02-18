import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';import { ThemeService } from './theming/theme.service';
import { ChangesComponent } from './pages/changes/changes.component';
import { ChangeListenerComponent } from './components/change-listener/change-listener.component';
;

@NgModule({
  declarations: [
    AppComponent,
    ChangesComponent,
    ChangeListenerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ThemeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
