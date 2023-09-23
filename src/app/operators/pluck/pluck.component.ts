import { Component } from '@angular/core';
import { from, pluck } from 'rxjs';

@Component({
  selector: 'app-pluck',
  templateUrl: './pluck.component.html',
  styleUrls: ['./pluck.component.scss']
})
export class PluckComponent {
  users = [
    { name: 'Manish', skills: 'Angular', job: { title: 'Front End Developer', exp: '8 years' } },
    { name: 'Steven', skills: 'Android', job: { title: 'Mobile App Developer', exp: '8 years' } },
    { name: 'Josheph', skills: 'NodeJs', job: { title: 'Back End Developer', exp: '8 years' } },
    { name: 'John', skills: 'QA', job: { title: 'Quality Assurance', exp: '8 years' } },
  ]

  ngOnInit(): void {
    this.Pluck1Subscribe();
    this.Pluck2Subscribe();
  }
  Pluck1Subscribe() {
    from(this.users).pipe(
      pluck('name') // alternate: map(res=>res.name)
    )
      .subscribe(data => {
        this.print(data, 'pluck-container1')
      })
  }
  Pluck2Subscribe() {
    from(this.users).pipe(
      pluck('job','title') // alternate: map(res=>res.skills)
    )
      .subscribe(data => {
        this.print(data, 'pluck-container2')
      })
  }

  print(value: any, containerId: string) {
    let li = document.createElement('li');
    li.innerText = value;
    document.getElementById(containerId)?.appendChild(li);
  }
}
