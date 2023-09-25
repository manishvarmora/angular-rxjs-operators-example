import { Component } from '@angular/core';
import { from, map, mergeAll, mergeMap, of } from 'rxjs';

@Component({
  selector: 'app-merge-map',
  templateUrl: './merge-map.component.html',
  styleUrls: ['./merge-map.component.scss']
})
export class MergeMapComponent {

  ngOnInit(): void {
    const source = from(['Front-End Developer', 'Back-End Developer', 'Full-Stack Developer', 'Mobile App Developer'])
    source
      .pipe(
        map(res => this.getData(res)))          //map
      .subscribe(data =>
        data.subscribe(res => {                 //inner-subscribe
          this.print(res, 'container1')
        }));
    source
      .pipe(
        map(res => this.getData(res)),          //map
        mergeAll())                             //mergeAll
      .subscribe(data => this.print(data, 'container2'));

    source
      .pipe(mergeMap(res => this.getData(res))) //mergeMap
      .subscribe(data => this.print(data, 'container3'));
  }

  //might be get from RestAPI
  getData(data: string) {
    return of(data + ' Tutorials')
  }


  print(value: any, containerId: string) {
    let li = document.createElement('li');
    li.innerText = value;
    document.getElementById(containerId)?.appendChild(li);
  }
}
