import { Component } from '@angular/core';
import { UtilityService } from './utility.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular-RxJs';
  isSubscibed: boolean = false;
  username: string = '';

  constructor(private _utils: UtilityService) { }

  ngOnInit(): void {
    this._utils.isSubscibed.subscribe(res => { this.isSubscibed = res; })
    this._utils.username.subscribe(res=> { this.username = res})
  }
}
