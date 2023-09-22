import { Component } from '@angular/core';
import { from, of } from 'rxjs';

@Component({
  selector: 'app-of-from',
  templateUrl: './of-from.component.html',
  styleUrls: ['./of-from.component.scss']
})
export class OfFromComponent {
  OfObjData: any;
  ngOnInit(): void {
    this.OfSubscribe()
    this.OfObjSubscribe()
    this.FromSubscribe()
    this.FromStringSubscribe()

  }
  OfSubscribe() {
    const obsData = of('Manish', 'Sukesh', 'Stephen')
    obsData.subscribe(data => {
      this.print(data, 'of-container')
    })
  }

  OfObjSubscribe() {
    const obsData = of({ A: 'Manish', B: 'Sukesh', C: 'Stephen' })
    obsData.subscribe(data => { this.OfObjData = data })
  }

  FromSubscribe() {
    const obsData = from(['Manish', 'Sukesh', 'Stephen'])
    obsData.subscribe(data => {
      this.print(data, 'from-container')
    })
  }
  FromStringSubscribe() {
    const obsData = from(`Hi, I'm mbvarmora`)
    obsData.subscribe(data => {
      this.print(data, 'fromstring-container')
    })
  }

  print(value: any, containerId: string) {
    let li = document.createElement('li');
    li.innerText = value;
    document.getElementById(containerId)?.appendChild(li);
  }
}
