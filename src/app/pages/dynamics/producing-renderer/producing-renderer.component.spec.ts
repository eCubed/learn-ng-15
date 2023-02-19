import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProducingRendererComponent } from './producing-renderer.component';

describe('ProducingRendererComponent', () => {
  let component: ProducingRendererComponent;
  let fixture: ComponentFixture<ProducingRendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProducingRendererComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProducingRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
