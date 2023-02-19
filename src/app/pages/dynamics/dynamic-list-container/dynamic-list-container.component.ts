import { IRendererComponent } from './../stated-interfaces';
import { Component, Input, ViewChild, OnChanges, SimpleChanges, Type } from '@angular/core';
import { InsertionPointDirective } from 'src/app/directives/insertion-point.directive';

@Component({
  selector: 'app-dynamic-list-container',
  templateUrl: './dynamic-list-container.component.html',
  styleUrls: ['./dynamic-list-container.component.scss']
})
export class DynamicListContainerComponent<TEntity extends any> implements OnChanges{

  @Input() items: Array<TEntity> = []
  @Input('determine-item-renderer') determineItemRenderer!: (item: TEntity) => Type<IRendererComponent<TEntity>>

  @ViewChild(InsertionPointDirective, { static: true }) insertionPointDirective!: InsertionPointDirective

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['items'].currentValue != null) {
      this.renderItems()
    }
  }

  renderItems() {
    const viewContainerRef = this.insertionPointDirective.viewContainerRef
    viewContainerRef.clear()

    this.items.forEach(item => {
      const component = viewContainerRef.createComponent<IRendererComponent<TEntity>>(this.determineItemRenderer(item))
      component.instance.data = item
    })
  }
}
