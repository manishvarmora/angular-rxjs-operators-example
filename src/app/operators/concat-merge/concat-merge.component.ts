import { Component } from '@angular/core';
import { concat, interval, map, take, merge } from 'rxjs';

@Component({
  selector: 'app-concat-merge',
  templateUrl: './concat-merge.component.html',
  styleUrls: ['./concat-merge.component.scss']
})
export class ConcatMergeComponent {
  ngOnInit(): void {
    const sourceNews = interval(1000).pipe(take(5), map(n => 'News video emit #' + (n + 1)))
    const sourceTech = interval(1000).pipe(take(5), map(t => 'Tech video emit #' + (t + 1)))
    const sourceSocial = interval(1000).pipe(take(5), map(s => 'Social video emit #' + (s + 1)))

    sourceNews.subscribe(res => { this.print(res, 'container1') })
    sourceTech.subscribe(res => { this.print(res, 'container2') })
    sourceSocial.subscribe(res => { this.print(res, 'container3') })

    concat(sourceNews, sourceTech, sourceSocial).subscribe(res => { this.print(res, 'container4')});
    merge(sourceNews, sourceTech, sourceSocial).subscribe(res => { this.print(res, 'container5')})
  }



  print(value: any, containerId: string) {
    let li = document.createElement('li');
    li.innerText = value;
    document.getElementById(containerId)?.appendChild(li);
  }
}
