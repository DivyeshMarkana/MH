import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeriesByHeroComponent } from './series-by-hero.component';

describe('SeriesByHeroComponent', () => {
  let component: SeriesByHeroComponent;
  let fixture: ComponentFixture<SeriesByHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeriesByHeroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeriesByHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
