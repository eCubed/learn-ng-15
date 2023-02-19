import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DowntimeRendererComponent } from './downtime-renderer.component';

describe('DowntimeRendererComponent', () => {
  let component: DowntimeRendererComponent;
  let fixture: ComponentFixture<DowntimeRendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DowntimeRendererComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DowntimeRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
