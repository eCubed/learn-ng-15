import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-changes',
  templateUrl: './changes.component.html',
  styleUrls: ['./changes.component.scss']
})
export class ChangesComponent implements OnInit, OnDestroy {

  start: number = 0
  end: number = 10

  changeInterval: any

  ngOnInit(): void {
    this.changeInterval = setInterval(() => {
      this.start += 1
      //this.end += 1
    }, 1000)
  }

  ngOnDestroy(): void {
    if (this.changeInterval != null) {
      clearInterval(this.changeInterval)
    }
  }

}
