import { Component } from '@angular/core';
import { filter, from, toArray } from 'rxjs';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {
  users = [
    { id: 1, name: 'Manish', skills: 'Angular', job: { title: 'Front End Developer', exp: '8' } },
    { id: 2, name: 'Steven', skills: 'Android', job: { title: 'Mobile App Developer', exp: '8' } },
    { id: 3, name: 'Mbvarmora', skills: 'Angular', job: { title: 'Front App Developer', exp: '8' } },
    { id: 4, name: 'Josheph', skills: 'NodeJs', job: { title: 'Back End Developer', exp: '7' } },
    { id: 5, name: 'John', skills: 'QA', job: { title: 'Quality Assurance', exp: '8' } },
  ]
  data1: any;
  data2: any;
  data3: any;
  ngOnInit(): void {
    this.Subscribe1()
    this.Subscribe2()
    this.Subscribe3()
  }
  Subscribe1() {
    from(this.users).pipe(
      filter(res => res.name.length > 6),
      toArray()
    ).subscribe(data => {
      this.data1 = data
    })
  }
  Subscribe2() {
    from(this.users).pipe(
      filter(res => res.skills == 'Angular'),
      toArray()
    ).subscribe(data => {
      this.data2 = data
    })
  }
  Subscribe3() {
    from(this.users).pipe(
      filter(res => res.id <= 4),
      toArray()
    ).subscribe(data => {
      this.data3 = data
    })
  }
}
