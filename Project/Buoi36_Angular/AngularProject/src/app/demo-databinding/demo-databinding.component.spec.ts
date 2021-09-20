import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoDatabindingComponent } from './demo-databinding.component';

describe('DemoDatabindingComponent', () => {
  let component: DemoDatabindingComponent;
  let fixture: ComponentFixture<DemoDatabindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoDatabindingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoDatabindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


//// Use this file to Test
