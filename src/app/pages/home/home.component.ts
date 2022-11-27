import { SingleLineFieldComponent } from './../../widgets/single-line-field/single-line-field.component';
import { ThemeSwitcherComponent } from './../../widgets/theme-switcher/theme-switcher.component';
import { ThemeConsumerComponent } from './../../widgets/theme-consumer/theme-consumer.component';
import { TreenodeSelectorComponent } from './../../widgets/treenode-selector/treenode-selector.component';
import { randomTrees } from './../../data/randomtrees';
import { TreeNode } from './../../models/treenode';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    TreenodeSelectorComponent,
    ReactiveFormsModule,
    ThemeConsumerComponent,
    ThemeSwitcherComponent,
    SingleLineFieldComponent
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  treeNodes: TreeNode[] = randomTrees;

  formGroup: FormGroup = new FormGroup({
    firstName: new FormControl('Primer nombre', [Validators.required]),
    gimmickId: new FormControl(null)
  })
}
