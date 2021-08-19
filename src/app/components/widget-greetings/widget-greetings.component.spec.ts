import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetGreetingsComponent } from './widget-greetings.component';

describe('WidgetGreetingsComponent', () => {
  let component: WidgetGreetingsComponent;
  let fixture: ComponentFixture<WidgetGreetingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WidgetGreetingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetGreetingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
