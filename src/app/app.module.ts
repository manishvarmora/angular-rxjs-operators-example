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
import { TapComponent } from './operators/tap/tap.component';
import { TakeComponent } from './operators/take/take.component';
import { RetryComponent } from './operators/retry/retry.component';
import { DebounceComponent } from './operators/debounce/debounce.component';
import { HttpClientModule } from '@angular/common/http';
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

@NgModule({
  declarations: [
    AppComponent,
    OfFromComponent,
    ListComponent,
    ToArrayComponent,
    CustomObservableComponent,
    MapComponent,
    PluckComponent,
    FilterComponent,
    TapComponent,
    TakeComponent,
    RetryComponent,
    DebounceComponent,
    ConcatMergeComponent,
    MergeMapComponent,
    ConcatMapComponent,
    SwitchMapComponent,
    ExhaustMapComponent,
    CombineLatestComponent,
    ZipForkComponent,
    CatchThrowErrorComponent,
    BehaviorSubjectComponent,
    ReplySubjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
