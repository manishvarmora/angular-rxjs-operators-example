import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { exhaustMap, fromEvent } from 'rxjs';

@Component({
  selector: 'app-exhaust-map',
  templateUrl: './exhaust-map.component.html',
  styleUrls: ['./exhaust-map.component.scss']
})
export class ExhaustMapComponent {

  @ViewChild('btn') btn!: ElementRef;

  url = 'https://jsonplaceholder.typicode.com/posts';

  count: number = 0;

  constructor(private http: HttpClient) {

  }
  ngOnInit(): void { }

  ngAfterViewInit() {
    fromEvent(this.btn.nativeElement, 'click').pipe(
      exhaustMap(() => this.saveData())
    ).subscribe(res => { this.count++ })
  }
  saveData() {
    return this.http.get(this.url);
  }
}
