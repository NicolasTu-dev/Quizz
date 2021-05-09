import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContadorInicialComponent } from './contador-inicial.component';

describe('ContadorInicialComponent', () => {
  let component: ContadorInicialComponent;
  let fixture: ComponentFixture<ContadorInicialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContadorInicialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContadorInicialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
