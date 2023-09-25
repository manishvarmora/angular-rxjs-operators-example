import { Component } from '@angular/core';
import { concatAll, concatMap, delay, from, map, of, switchAll, switchMap } from 'rxjs';

@Component({
  selector: 'app-switch-map',
  templateUrl: './switch-map.component.html',
  styleUrls: ['./switch-map.component.scss']
})
export class SwitchMapComponent {

  ngOnInit(): void {
    const source = from(['Front-End Developer', 'Back-End Developer', 'Full-Stack Developer', 'Mobile App Developer'])
    source
      .pipe(
        map(res => this.getData(res)))          //map
      .subscribe(data =>                        //inner-subscribe
        data.subscribe(res => { this.print(res, 'container1') }));

    source
      .pipe(
        map(res => this.getData(res)),          //map
        switchAll())                             //switchAll
      .subscribe(data => this.print(data, 'container2'));

    source
      .pipe(
        switchMap(res => this.getData(res)))          //switchMap
      .subscribe(data => this.print(data, 'container3'));

  }

  //might be get from RestAPI
  getData(data: string) {
    return of(data + ' Tutorials').pipe(delay(2000))
  }


  print(value: any, containerId: string) {
    let li = document.createElement('li');
    li.innerText = value;
    document.getElementById(containerId)?.appendChild(li);
  }
}
