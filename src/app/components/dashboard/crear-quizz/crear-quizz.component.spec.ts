import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearQuizzComponent } from './crear-quizz.component';

describe('CrearQuizzComponent', () => {
  let component: CrearQuizzComponent;
  let fixture: ComponentFixture<CrearQuizzComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearQuizzComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearQuizzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
