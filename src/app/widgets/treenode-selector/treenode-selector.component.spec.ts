import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreenodeSelectorComponent } from './treenode-selector.component';

describe('TreenodeSelectorComponent', () => {
  let component: TreenodeSelectorComponent;
  let fixture: ComponentFixture<TreenodeSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ TreenodeSelectorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TreenodeSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
