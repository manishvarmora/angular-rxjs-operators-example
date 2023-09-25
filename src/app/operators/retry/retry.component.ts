import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, retry, retryWhen, scan } from 'rxjs';

@Component({
  selector: 'app-retry',
  templateUrl: './retry.component.html',
  styleUrls: ['./retry.component.scss']
})
export class RetryComponent {
  data: any;
  constructor(private _http: HttpClient) { }
  ngOnInit(): void {
    this.Subscribe1()
  }
  Subscribe1() {
    this._http.get('https://jsonplaceholder.typicode.com/users/1').pipe(
      // retry(2),
      retryWhen(err => err.pipe(
        delay(3000),
        scan(count => {
          if (count >= 2)
            throw err;
          else
            return count + 1;
        }, 0)
      ))
    )
      .subscribe(res => {
        console.log(res);
        this.data = res
      })
  }
}
