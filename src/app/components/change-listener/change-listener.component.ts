import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-change-listener',
  templateUrl: './change-listener.component.html',
  styleUrls: ['./change-listener.component.scss']
})
export class ChangeListenerComponent implements OnChanges {

  @Input() start: number = 0
  @Input() end: number = 10

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['start'] && changes['end']) {
      console.log(`start is first change: ${changes['start'].firstChange} old: ${changes['start'].previousValue} new: ${changes['start'].currentValue} `)
      console.log(`end is first change: ${changes['end'].firstChange} old: ${changes['end'].previousValue} new: ${changes['end'].currentValue} `)
    }
  }
}
