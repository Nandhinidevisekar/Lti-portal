import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteMultiplexComponent } from './delete-multiplex.component';

describe('DeleteMultiplexComponent', () => {
  let component: DeleteMultiplexComponent;
  let fixture: ComponentFixture<DeleteMultiplexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteMultiplexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteMultiplexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
