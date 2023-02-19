import { IStatedEntity, IRendererComponent } from './../stated-interfaces';
import { Component } from '@angular/core';

@Component({
  selector: 'app-downtime-renderer',
  templateUrl: './downtime-renderer.component.html',
  styleUrls: ['./downtime-renderer.component.scss']
})
export class DowntimeRendererComponent implements IRendererComponent<IStatedEntity> {
  data!: IStatedEntity;
}
