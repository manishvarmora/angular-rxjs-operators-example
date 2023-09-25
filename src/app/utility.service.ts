import { Injectable } from '@angular/core';
import { BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  isSubscibed = new Subject<boolean>();
  username = new BehaviorSubject<string>('mbvarmora');
  VideoEmit = new ReplaySubject<string>(3);

  constructor() { }

}
