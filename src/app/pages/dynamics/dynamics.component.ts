import { ProducingRendererComponent } from './producing-renderer/producing-renderer.component';
import { Component, ViewChild, OnInit, Type } from '@angular/core';
import { InsertionPointDirective } from 'src/app/directives/insertion-point.directive';
import { IStatedEntity, IRendererComponent } from './stated-interfaces';
import { DowntimeRendererComponent } from './downtime-renderer/downtime-renderer.component';

@Component({
  selector: 'app-dynamics',
  templateUrl: './dynamics.component.html',
  styleUrls: ['./dynamics.component.scss']
})
export class DynamicsComponent implements OnInit {

  @ViewChild(InsertionPointDirective, { static: true }) insertionPointDirective!: InsertionPointDirective

  statedThings: Array<IStatedEntity> = []

  ngOnInit(): void {
    this.statedThings = [
      { id: 1, state: '30'},
      { id: 7, state: '10'},
      { id: 15, state: '35'},
      { id: 21, state: '11'},
      { id: 77, state: '30'},
      { id: 21, state: '17'},
    ]
  }


  onDetermineItemRenderer(item: IStatedEntity): Type<IRendererComponent<IStatedEntity>> {
    if (item.state.startsWith('1'))
      return ProducingRendererComponent
    else if (item.state.startsWith('3'))
      return DowntimeRendererComponent
    else
      return ProducingRendererComponent
  }

}
