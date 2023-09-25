import { Component } from '@angular/core';
import { UtilityService } from 'src/app/utility.service';

@Component({
  selector: 'app-behavior-subject',
  templateUrl: './behavior-subject.component.html',
  styleUrls: ['./behavior-subject.component.scss']
})
export class BehaviorSubjectComponent {
  isSubscibed: boolean | undefined;

  constructor(private _util: UtilityService) {
    this._util.isSubscibed.subscribe(res => { this.isSubscibed = res; })
  }

  subscribe() {
    this._util.isSubscibed.next(true)
  }
  unsubscribe() {
    this._util.isSubscibed.next(false)
  }
  onChange(data:any){
    this._util.username.next(data.value)
  }
  ngOnInit(): void {

  }
}
