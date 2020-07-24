import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMultiplexComponent } from './list-multiplex.component';

describe('ListMultiplexComponent', () => {
  let component: ListMultiplexComponent;
  let fixture: ComponentFixture<ListMultiplexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListMultiplexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMultiplexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
