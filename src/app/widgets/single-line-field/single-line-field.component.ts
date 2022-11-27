import { Subscription } from 'rxjs';
import { ThemeService } from './../../theming/theme.service';
import { ReactiveControlBase } from './../utils/reactive-control-base';
import { Component, forwardRef, Injector, Input, Optional, Self, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NG_VALUE_ACCESSOR, NgControl, NG_VALIDATORS } from '@angular/forms';

@Component({
  selector: 'app-single-line-field',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './single-line-field.component.html',
  styleUrls: ['./single-line-field.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => SingleLineFieldComponent)
    }
  ]
})
export class SingleLineFieldComponent extends ReactiveControlBase<string> {
  @Input()
  labelText!: string

  @Input()
  padding?: string

  @Input()
  borderRadius?: string

  inputStyle!: any

  constructor(injector: Injector) {
    super(injector)
  }

  onChange(e: Event) {
    this.value = (e.target as HTMLInputElement).value
  }

}
