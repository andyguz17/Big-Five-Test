import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpennessComponent } from './openness.component';

describe('OpennessComponent', () => {
  let component: OpennessComponent;
  let fixture: ComponentFixture<OpennessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpennessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpennessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
