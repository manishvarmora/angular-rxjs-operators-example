import { Component } from '@angular/core';
import { Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-custom-observable',
  templateUrl: './custom-observable.component.html',
  styleUrls: ['./custom-observable.component.scss']
})
export class CustomObservableComponent {
  obsStatus: string | undefined;
  obsStatus2: string | undefined;
  ngOnInit(): void {
    this.CustObsSubscribe()
    this.CustObs2Subscribe()
  }

  CustObsSubscribe() {
    const custObs = new Observable((observer: Observer<string>) => {
      setTimeout(() => { observer.next('Manish'); }, 1000);
      setTimeout(() => { observer.next('Stephen'); observer.complete(); }, 2000);
      setTimeout(() => { observer.next('mbvarmora'); observer.error(new Error('Limit Exceed')); }, 3000);
    });

    custObs.subscribe({
      next: (data) => { console.log(data); this.print(data, 'custObs-container') },
      error: (err) => { console.log(err); this.obsStatus = 'error'; },
      complete: () => { this.obsStatus = 'completed'; }
    })
  }

  CustObs2Subscribe() {
    const Arr2 = ['Angular', 'Typescript', 'RxJS', 'NgRx', 'ExpressJs', 'MongoDb', 'NodeJs']
    const custObs2 = new Observable((observer: Observer<string>) => {
      let count = 0;
      setInterval(() => {
        observer.next(Arr2[count])
        count++;
        if (count >= 7)
          observer.complete();
      }, 1000)
    })

   custObs2.subscribe({
      next: (data) => { console.log(data); this.print(data, 'custObs2-container') },
      error: (err) => { console.log(err); this.obsStatus2 = 'error'; },
      complete: () => { this.obsStatus2 = 'completed'; }
    })
  }

  // Printing data
  print(value: any, containerId: string) {
    let li = document.createElement('li');
    li.innerText = value;
    document.getElementById(containerId)?.appendChild(li);
  }
}
