import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarvelOverviewComponent } from './marvel-overview.component';

describe('MarvelOverviewComponent', () => {
  let component: MarvelOverviewComponent;
  let fixture: ComponentFixture<MarvelOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarvelOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarvelOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
