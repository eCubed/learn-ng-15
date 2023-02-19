import { IStatedEntity, IRendererComponent } from './../stated-interfaces';
import { Component } from '@angular/core';

@Component({
  selector: 'app-producing-renderer',
  templateUrl: './producing-renderer.component.html',
  styleUrls: ['./producing-renderer.component.scss']
})
export class ProducingRendererComponent implements IRendererComponent<IStatedEntity> {
  data!: IStatedEntity;

  constructor() {

  }
}
