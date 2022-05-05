import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SerieesComponent } from './seriees.component';

describe('SerieesComponent', () => {
  let component: SerieesComponent;
  let fixture: ComponentFixture<SerieesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SerieesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SerieesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
