import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';import { ThemeService } from './theming/theme.service';
import { ChangesComponent } from './pages/changes/changes.component';
import { ChangeListenerComponent } from './components/change-listener/change-listener.component';
import { DynamicsComponent } from './pages/dynamics/dynamics.component';
import { InsertionPointDirective } from './directives/insertion-point.directive';
import { ProducingRendererComponent } from './pages/dynamics/producing-renderer/producing-renderer.component';
import { DowntimeRendererComponent } from './pages/dynamics/downtime-renderer/downtime-renderer.component';
import { DynamicListContainerComponent } from './pages/dynamics/dynamic-list-container/dynamic-list-container.component';
;

@NgModule({
  declarations: [
    AppComponent,
    ChangesComponent,
    ChangeListenerComponent,
    DynamicsComponent,
    InsertionPointDirective,
    ProducingRendererComponent,
    DowntimeRendererComponent,
    DynamicListContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ThemeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
