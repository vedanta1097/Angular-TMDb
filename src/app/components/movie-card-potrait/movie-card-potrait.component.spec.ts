import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieCardPotraitComponent } from './movie-card-potrait.component';

describe('MovieCardPotraitComponent', () => {
  let component: MovieCardPotraitComponent;
  let fixture: ComponentFixture<MovieCardPotraitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieCardPotraitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieCardPotraitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
