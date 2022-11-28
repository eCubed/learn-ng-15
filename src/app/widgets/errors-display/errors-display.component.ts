import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbstractControl } from '@angular/forms';
import { convertErrorToText } from '../utils/validation-error-utils';

@Component({
  selector: 'errors-display',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './errors-display.component.html',
  styleUrls: ['./errors-display.component.scss']
})
export class ErrorsDisplayComponent {
  @Input()
  control!: AbstractControl

  determineErrorMessage(errorObject: any) {
    return convertErrorToText(errorObject)
  }
}
