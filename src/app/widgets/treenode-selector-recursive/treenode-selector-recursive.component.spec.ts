import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreenodeSelectorRecursiveComponent } from './treenode-selector-recursive.component';

describe('TreenodeSelectorRecursiveComponent', () => {
  let component: TreenodeSelectorRecursiveComponent;
  let fixture: ComponentFixture<TreenodeSelectorRecursiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ TreenodeSelectorRecursiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TreenodeSelectorRecursiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
