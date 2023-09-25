import { Component } from '@angular/core';
import { Subscription, from, interval, map, take, takeLast, takeUntil, timer } from 'rxjs';

@Component({
  selector: 'app-take',
  templateUrl: './take.component.html',
  styleUrls: ['./take.component.scss']
})
export class TakeComponent {
  colors = ['Blue', 'Yellow', 'Red', 'Green', 'Purple', 'Orange', 'Lime', 'Gray']

  ngOnInit(): void {
    this.Subscribe1()
    this.Subscribe2()
    this.Subscribe3()
  }
  Subscribe1() {
    from(this.colors).pipe(
      take(5),
    ).subscribe(res => {
      this.print(res, 'container1')
    })
  }
  Subscribe2() {
    from(this.colors).pipe(
      takeLast(3),
    ).subscribe(res => {
      this.print(res, 'container2')
    })
  }
  Subscribe3() {
    const source = interval(1000);
    const condition = timer(5000)
    source.pipe(
      takeUntil(condition),
      map(res=>this.colors[res])
    ).subscribe(res => {
      this.print(res, 'container3')
    })
  }

  print(value: any, containerId: string) {
    let li = document.createElement('li');
    li.innerText = value;
    document.getElementById(containerId)?.appendChild(li);
  }
}
