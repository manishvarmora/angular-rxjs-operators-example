import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OfFromComponent } from './operators/of-from/of-from.component';
import { ListComponent } from './list/list.component';
import { AppComponent } from './app.component';
import { ToArrayComponent } from './operators/to-array/to-array.component';

const routes: Routes = [
  { path: '', component: ListComponent },
  { path: 'of-from', component: OfFromComponent },
  { path: 'to-array', component: ToArrayComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
