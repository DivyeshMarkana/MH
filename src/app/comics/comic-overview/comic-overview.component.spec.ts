import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComicOverviewComponent } from './comic-overview.component';

describe('ComicOverviewComponent', () => {
  let component: ComicOverviewComponent;
  let fixture: ComponentFixture<ComicOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComicOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComicOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
