import { CommonModule } from '@angular/common';
import { Injector, AfterViewInit, Component } from '@angular/core';
import { AbstractControl, ControlValueAccessor, NgControl } from '@angular/forms';

@Component({
  selector: 'app-reactive-control-base',
  standalone: true,
  imports: [CommonModule],
  template: ''
})
export abstract class ReactiveControlBase<T> implements ControlValueAccessor, AfterViewInit {

  private innerValue!: T;
  private changed = new Array<(value: T) => void>()
  private touched = new Array<() => void>()
  private wasTouched = false
  private isDisabled = false;

  public ngControl!: NgControl
  public staticObject = Object

  constructor(protected injector: Injector) {

  }

  ngAfterViewInit(): void {
    this.ngControl = this.injector.get(NgControl)

  }

  get value(): T {
    return this.innerValue
  }

  set value(value: T) {
    if (this.innerValue !== value) {
      this.innerValue = value;
      this.changed.forEach(f => f(value))
    }
  }

  markTouched() {
    if (!this.wasTouched) {
      this.touched.forEach(f => f())
      this.wasTouched = true
    }
  }

  writeValue(value: T): void {
    this.innerValue = value
  }

  registerOnChange(fn: (value: T) => void): void {
    this.changed.push(fn)
  }

  registerOnTouched(fn: () => void): void {
    this.touched.push(fn)
  }

  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled = isDisabled
  }
}
