import { FormControl, FormGroup } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss']
})
export class ReactiveFormsComponent {

  registration: FormGroup = new FormGroup({
    firstName: new FormControl('John'),
    lastName: new FormControl('Smith')
  })

  onClickSave() {
    
  }
}
