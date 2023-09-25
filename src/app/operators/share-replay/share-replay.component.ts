import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable, filter, map, shareReplay } from 'rxjs';

@Component({
  selector: 'app-share-replay',
  templateUrl: './share-replay.component.html',
  styleUrls: ['./share-replay.component.scss']
})
export class ShareReplayComponent {
  AllDAta!: Observable<any>;
  CompletedTrue!: Observable<any>;
  CompletedFalse!: Observable<any>;

  constructor(private http: HttpClient) {

  }
  ngOnInit(): void {
    this.AllDAta = this.http.get<any>('https://jsonplaceholder.typicode.com/todos').pipe(
      shareReplay(), //call API only 1 times. if don't use shareReplay, api call 3 times
    );
    this.CompletedTrue = this.AllDAta.pipe(
      map(res => res.filter((result: any) => { return result.completed == true }))
    )
    this.CompletedFalse = this.AllDAta.pipe(
      map(res => res.filter((result: any) => { return result.completed == false }))
    )
  }
}
