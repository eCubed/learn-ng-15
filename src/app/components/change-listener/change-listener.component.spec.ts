import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeListenerComponent } from './change-listener.component';

describe('ChangeListenerComponent', () => {
  let component: ChangeListenerComponent;
  let fixture: ComponentFixture<ChangeListenerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeListenerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangeListenerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
