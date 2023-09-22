import { Component } from '@angular/core';
import { from, interval, take, toArray } from 'rxjs';

@Component({
  selector: 'app-to-array',
  templateUrl: './to-array.component.html',
  styleUrls: ['./to-array.component.scss']
})
export class ToArrayComponent {
  users = [
    { name: 'Manish', position: 'Sr.Web Developer' },
    { name: 'John', position: 'UX/UI designer' },
    { name: 'Stephen', position: 'Cloud Engineer' },
    { name: 'parker', position: 'QA Tester' },
  ]
  data: any;
  ngOnInit(): void {
    this.IntervalSubscribe()
    this.ObsSubscribe()
    this.ObsToArraySubscribe()
  }
  IntervalSubscribe() {
    const Interval = interval(1000);
    Interval.pipe(
      take(10)
    ).subscribe(data => {
      this.print(data, 'interval-container')
    })
  }

  ObsSubscribe() {
    from(this.users)
      .subscribe(data => {
        console.log('Observable: ', data);
        this.print(data.name + ', ' + data.position, 'Obs-container')
      })
  }
  ObsToArraySubscribe() {
    from(this.users).pipe(
      toArray()
    ).subscribe(data => {
      console.log('toArray(): ',data);
      this.data = data
    })
  }





  // Printing data
  print(value: any, containerId: string) {
    let li = document.createElement('li');
    li.innerText = value;
    document.getElementById(containerId)?.appendChild(li);
  }
}
