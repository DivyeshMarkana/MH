import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarvelDataPlaceholderComponent } from './marvel-data-placeholder.component';

describe('MarvelDataPlaceholderComponent', () => {
  let component: MarvelDataPlaceholderComponent;
  let fixture: ComponentFixture<MarvelDataPlaceholderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarvelDataPlaceholderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarvelDataPlaceholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
