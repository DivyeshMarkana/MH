import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComicByHeroComponent } from './comic-by-hero.component';

describe('ComicByHeroComponent', () => {
  let component: ComicByHeroComponent;
  let fixture: ComponentFixture<ComicByHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComicByHeroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComicByHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
