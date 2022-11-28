import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorsDisplayComponent } from './errors-display.component';

describe('ErrorsDisplayComponent', () => {
  let component: ErrorsDisplayComponent;
  let fixture: ComponentFixture<ErrorsDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ErrorsDisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ErrorsDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
