import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardProjectedComponent } from './card-projected.component';

describe('CardProjectedComponent', () => {
  let component: CardProjectedComponent;
  let fixture: ComponentFixture<CardProjectedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardProjectedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardProjectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
