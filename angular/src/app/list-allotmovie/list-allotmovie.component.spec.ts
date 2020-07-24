import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAllotmovieComponent } from './list-allotmovie.component';

describe('ListAllotmovieComponent', () => {
  let component: ListAllotmovieComponent;
  let fixture: ComponentFixture<ListAllotmovieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListAllotmovieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAllotmovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
