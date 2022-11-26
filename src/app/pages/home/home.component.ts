import { ThemeSwitcherComponent } from './../../widgets/theme-switcher/theme-switcher.component';
import { ThemeConsumerComponent } from './../../widgets/theme-consumer/theme-consumer.component';
import { TreenodeSelectorComponent } from './../../widgets/treenode-selector/treenode-selector.component';
import { randomTrees } from './../../data/randomtrees';
import { TreeNode } from './../../models/treenode';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, TreenodeSelectorComponent, ReactiveFormsModule, ThemeConsumerComponent, ThemeSwitcherComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  treeNodes: TreeNode[] = randomTrees;

  formGroup: FormGroup = new FormGroup({
    gimmickId: new FormControl(null)
  })
}
