import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { debounce, debounceTime, distinctUntilChanged, fromEvent, map } from 'rxjs';

@Component({
  selector: 'app-debounce',
  templateUrl: './debounce.component.html',
  styleUrls: ['./debounce.component.scss']
})
export class DebounceComponent implements AfterViewInit {

  @ViewChild('input') input: ElementRef | undefined;
  inputtext: string = '';

  @ViewChild('debounceInput') debounceInput: ElementRef | undefined;
  inputtext1: string = '';

  @ViewChild('ducInput') ducInput: ElementRef | undefined;
  inputtext2: string = '';

  ngAfterViewInit(): void {
    // Ex - 01
    fromEvent<any>(this.input?.nativeElement, 'keyup').pipe(
      map(event => event.target.value),
    ).subscribe(res => {
      this.inputtext = res
    })
    // Ex - 02
    fromEvent<any>(this.debounceInput?.nativeElement, 'keyup').pipe(
      map(event => event.target.value),
      debounceTime(2000)
    ).subscribe(res => {
      this.inputtext1 = res
    })
    // Ex - 03
    fromEvent<any>(this.ducInput?.nativeElement, 'keyup').pipe(
      map(event => event.target.value),
      debounceTime(1000),
      distinctUntilChanged()
    ).subscribe(res => {
      this.inputtext2 = res
      console.log(res);

    })
  }
}
