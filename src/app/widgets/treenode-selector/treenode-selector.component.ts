import { TreenodeSelectorRecursiveComponent } from './../treenode-selector-recursive/treenode-selector-recursive.component';
import { TreeNode } from './../../models/treenode';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'treenode-selector',
  standalone: true,
  imports: [CommonModule,  TreenodeSelectorRecursiveComponent],
  templateUrl: './treenode-selector.component.html',
  styleUrls: ['./treenode-selector.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: TreenodeSelectorComponent
    }
  ]
})
export class TreenodeSelectorComponent implements ControlValueAccessor {

  @Input('tree-nodes')
  treeNodes: TreeNode[] = []


  treeNodeId: number | null = null

  onChange = (_id: number | null) => {}

  writeValue(selectedId: number): void {
    this.treeNodeId = selectedId;
  }
  registerOnChange(fn: (id: number | null) => void): void {
    this.onChange = fn
  }

  registerOnTouched(fn: any): void {
    // throw new Error('Method not implemented.');
  }
  setDisabledState?(isDisabled: boolean): void {
    // throw new Error('Method not implemented.');
  }

  onAnyTreeNodeSelected(treeNode: TreeNode) {
    console.log(`onAnyTreeNodeSelected`)
      this.treeNodeId = treeNode?.id ;
      this.onChange?.(treeNode?.id ?? null)
  }
}

