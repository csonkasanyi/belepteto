import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewExamineeComponent } from './new-examinee.component';

describe('NewExamineeComponent', () => {
  let component: NewExamineeComponent;
  let fixture: ComponentFixture<NewExamineeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewExamineeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewExamineeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
