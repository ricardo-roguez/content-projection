import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { CardProjectedComponent } from './components/card-projected/card-projected.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CardComponent,
    CardProjectedComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
