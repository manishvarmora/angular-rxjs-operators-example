import { Component } from '@angular/core';
import { Subscription, interval, map, tap } from 'rxjs';

@Component({
  selector: 'app-tap',
  templateUrl: './tap.component.html',
  styleUrls: ['./tap.component.scss']
})
export class TapComponent {
  users = [
    { id: 1, name: 'Manish', skills: 'Angular', job: { title: 'Front End Developer', exp: '8' } },
    { id: 2, name: 'Steven', skills: 'Android', job: { title: 'Mobile App Developer', exp: '8' } },
    { id: 3, name: 'Mbvarmora', skills: 'Angular', job: { title: 'Front App Developer', exp: '8' } },
    { id: 4, name: 'Josheph', skills: 'NodeJs', job: { title: 'Back End Developer', exp: '7' } },
    { id: 5, name: 'John', skills: 'QA', job: { title: 'Quality Assurance', exp: '8' } },
  ]
  colors = ['Blue', 'Yellow', 'Red', 'Green', 'Purple', 'Orange', 'Lime', 'Gray']
  myColor: any;

  ngOnInit(): void {
    this.Subscribe1()
    this.Subscribe2()
  }
  Subscribe1() {
    let subscription1: Subscription
    const source = interval(1000);
    subscription1 = source.pipe(
      // tap(res => { console.log(res) }),
      tap(res => {
        console.log(res)
        if (res >= 5)
          subscription1.unsubscribe();
      }),
      map(res => this.users[res].name),
    ).subscribe(res => {
      this.print(res, 'container1')
    })
  }
  Subscribe2() {
    let subscription2: Subscription
    const source = interval(1000);
    subscription2 = source.pipe(
      tap(res => {
        this.myColor = this.colors[res];
        console.log(res)
        if (res >= 8)
          subscription2.unsubscribe();
      }),
      map(res => this.colors[res]),
    ).subscribe(res => {
      this.print(res, 'container2')
    })
  }

  print(value: any, containerId: string) {
    let li = document.createElement('li');
    li.innerText = value;
    document.getElementById(containerId)?.appendChild(li);
  }
}
