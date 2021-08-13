import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { OpennessComponent } from './pages/openness/openness.component';

@NgModule({
  declarations: [
    AppComponent,
    OpennessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
