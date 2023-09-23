import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OfFromComponent } from './operators/of-from/of-from.component';
import { ListComponent } from './list/list.component';
import { AppComponent } from './app.component';
import { ToArrayComponent } from './operators/to-array/to-array.component';
import { CustomObservableComponent } from './operators/custom-observable/custom-observable.component';
import { MapComponent } from './operators/map/map.component';
import { PluckComponent } from './operators/pluck/pluck.component';
import { FilterComponent } from './operators/filter/filter.component';

const routes: Routes = [
  { path: '', component: ListComponent },
  { path: 'of-from', component: OfFromComponent },
  { path: 'to-array', component: ToArrayComponent },
  { path: 'custom-observable', component: CustomObservableComponent },
  { path: 'map', component: MapComponent },
  { path: 'pluck', component: PluckComponent },
  { path: 'filter', component: FilterComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
