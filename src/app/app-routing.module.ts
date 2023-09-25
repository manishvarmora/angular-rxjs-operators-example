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
import { TapComponent } from './operators/tap/tap.component';
import { TakeComponent } from './operators/take/take.component';
import { RetryComponent } from './operators/retry/retry.component';
import { DebounceComponent } from './operators/debounce/debounce.component';
import { ConcatMergeComponent } from './operators/concat-merge/concat-merge.component';
import { MergeMapComponent } from './operators/merge-map/merge-map.component';
import { ConcatMapComponent } from './operators/concat-map/concat-map.component';
import { SwitchMapComponent } from './operators/switch-map/switch-map.component';
import { ExhaustMapComponent } from './operators/exhaust-map/exhaust-map.component';
import { CombineLatestComponent } from './operators/combine-latest/combine-latest.component';
import { ZipForkComponent } from './operators/zip-fork/zip-fork.component';
import { CatchThrowErrorComponent } from './operators/catch-throw-error/catch-throw-error.component';
import { BehaviorSubjectComponent } from './operators/behavior-subject/behavior-subject.component';
import { ReplySubjectComponent } from './operators/reply-subject/reply-subject.component';

const routes: Routes = [
  { path: '', component: ListComponent },
  { path: 'of-from', component: OfFromComponent },
  { path: 'to-array', component: ToArrayComponent },
  { path: 'custom-observable', component: CustomObservableComponent },
  { path: 'map', component: MapComponent },
  { path: 'pluck', component: PluckComponent },
  { path: 'filter', component: FilterComponent },
  { path: 'tap', component: TapComponent },
  { path: 'take', component: TakeComponent },
  { path: 'retry', component: RetryComponent },
  { path: 'debounce', component: DebounceComponent },

  { path: 'concat-merge', component: ConcatMergeComponent },
  { path: 'merge-map', component: MergeMapComponent },
  { path: 'concat-map', component: ConcatMapComponent },
  { path: 'switch-map', component: SwitchMapComponent },
  { path: 'exhaust-map', component: ExhaustMapComponent },
  { path: 'combinelatest', component: CombineLatestComponent },
  { path: 'zip-fork', component: ZipForkComponent },
  { path: 'catcherror', component: CatchThrowErrorComponent },
  { path: 'subject', component: BehaviorSubjectComponent },
  { path: 'replay-subject', component: ReplySubjectComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
