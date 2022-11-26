import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeConsumerComponent } from './theme-consumer.component';

describe('ThemeConsumerComponent', () => {
  let component: ThemeConsumerComponent;
  let fixture: ComponentFixture<ThemeConsumerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ThemeConsumerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThemeConsumerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
