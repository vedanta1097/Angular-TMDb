import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieCardLandscapeComponent } from './movie-card-landscape.component';

describe('MovieCardLandscapeComponent', () => {
  let component: MovieCardLandscapeComponent;
  let fixture: ComponentFixture<MovieCardLandscapeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieCardLandscapeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieCardLandscapeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
