import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OfFromComponent } from './operators/of-from/of-from.component';
import { ListComponent } from './list/list.component';
import { ToArrayComponent } from './operators/to-array/to-array.component';
import { CustomObservableComponent } from './operators/custom-observable/custom-observable.component';
import { MapComponent } from './operators/map/map.component';
import { PluckComponent } from './operators/pluck/pluck.component';
import { FilterComponent } from './operators/filter/filter.component';

@NgModule({
  declarations: [
    AppComponent,
    OfFromComponent,
    ListComponent,
    ToArrayComponent,
    CustomObservableComponent,
    MapComponent,
    PluckComponent,
    FilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
