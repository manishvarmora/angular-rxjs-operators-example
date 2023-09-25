import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { UtilityService } from 'src/app/utility.service';

@Component({
  selector: 'app-reply-subject',
  templateUrl: './reply-subject.component.html',
  styleUrls: ['./reply-subject.component.scss']
})
export class ReplySubjectComponent {
  userList1 = ['Angular1', 'Angular2', 'Angular3', 'Angular4']
  userList2: any = []
  userList3: any = []

  subsccriptionMode2: boolean = false
  subsccriptionMode3: boolean = false

  subsccription2!: Subscription;
  subsccription3!: Subscription;

  constructor(private _util: UtilityService) {
    this._util.VideoEmit.subscribe(res => { this.userList1.push(res) })
  }

  ngOninit(): void { }

  addVideo(data: any) {
    this._util.VideoEmit.next(data);
  }
  subscribe2() {
    if (this.subsccription2) {
      this.subsccription2.unsubscribe();
    } else {
      this.subsccription2 = this._util.VideoEmit.subscribe(res => {
        console.log('sub2', res);
        this.userList2.push(res)
      })
    }
    this.subsccriptionMode2 = !this.subsccriptionMode2
  }
  subscribe3() {
    if (this.subsccription3) {
      this.subsccription3.unsubscribe();
    } else {
      this.subsccription3 = this._util.VideoEmit.subscribe(res => {
        console.log('sub3', res);
        this.userList3.push(res)
      })
    }
    this.subsccriptionMode3 = !this.subsccriptionMode3
  }
}
