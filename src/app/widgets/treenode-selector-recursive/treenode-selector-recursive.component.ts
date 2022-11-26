import { FormsModule } from '@angular/forms';
import { TreeNode } from './../../models/treenode';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'treenode-selector-recursive',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './treenode-selector-recursive.component.html',
  styleUrls: ['./treenode-selector-recursive.component.scss']
})
export class TreenodeSelectorRecursiveComponent {

  @Input('tree-nodes')
  treeNodes: TreeNode[] = []

  @Output('tree-node-selected-at-level')
  treeNodeSelectedAtLevel: EventEmitter<TreeNode> = new EventEmitter<TreeNode>()

  _treeNodeId: number | null = null

  @Input('tree-node-id')
  set treeNodeId(value: number | null) {
    this._treeNodeId = value
    this.treeNodes.forEach(tn => {
    })
    if (value != undefined) {
      const ascendant = findAscendant(this.treeNodes, value)
      if (ascendant != null) {
        this.selectedTreeNodeAtLevel = this.treeNodes.find(tn => tn.id === ascendant.id) ?? null
      } else {
        this.selectedTreeNodeAtLevel = null
      }
    } else {
      this.selectedTreeNodeAtLevel = null
    }
  }

  get treeNodeId() {
    return this._treeNodeId
  }

  selectedTreeNodeAtLevel: TreeNode | null = null

  onSelectedTreeNodeAtLevelChanged(treeNode: TreeNode) {
    this.treeNodeId = treeNode?.id
    this.treeNodeSelectedAtLevel.emit(treeNode)
  }

  onTreeNodeSelectedAmongChildren(treeNode: TreeNode) {
    this.treeNodeId = treeNode?.id
    this.treeNodeSelectedAtLevel.emit(treeNode)
  }
}

function findAscendant(treeNodes: TreeNode[], descendantId: number) {
  for(let i = 0; i < treeNodes.length; i++) {
    //console.log(`examining ${treeNodes[i].name} to see if it has ${descendantId}`)
    var treeNodeHasDescendant = hasDescendant(treeNodes[i], descendantId)
    if (treeNodeHasDescendant) {
      return treeNodes[i];
    }
  }

  return null;
}

// Util function
function hasDescendant(treeNode: TreeNode, descendantId: number) {
  if (treeNode.id === descendantId) {
    return true
  } else {
    if (treeNode.children === null || (treeNode.children?.length ?? 0) === 0) {
      return false
    } else {
      for(let i = 0; i < treeNode.children!.length; i++) {
        var childHasDescendant = hasDescendant(treeNode.children![i], descendantId)
        if (childHasDescendant) {
          return true
        }
      }
    }
  }
  return false;
}

