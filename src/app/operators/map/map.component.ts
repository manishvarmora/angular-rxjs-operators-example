import { Component } from '@angular/core';
import { from, map } from 'rxjs';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent {
  user = [
    { 'fname': 'Manish', 'lname': 'Varmora' },
    { 'fname': 'Stephen', 'lname': 'Park' },
    { 'fname': 'John', 'lname': 'Doe' },
  ]

  ngOnInit(): void {
    this.Map1Subscribe()
    this.Map2Subscribe()
  }

  Map1Subscribe() {
    from([1,5,6,7,9]).pipe(
      map((res: any) => res * 10)
    ).subscribe(data => {
      this.print(data, 'map-container1')
    })
  }
  Map2Subscribe() {
    from(this.user).pipe(
      map((res: any) => res.fname + ' ' + res.lname)
    ).subscribe(data => {
      this.print(data, 'map-container2')
    })
  }


  print(value: any, containerId: string) {
    let li = document.createElement('li');
    li.innerText = value;
    document.getElementById(containerId)?.appendChild(li);
  }
}
