import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangedateComponent } from './changedate.component';

describe('ChangedateComponent', () => {
  let component: ChangedateComponent;
  let fixture: ComponentFixture<ChangedateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChangedateComponent]
    });
    fixture = TestBed.createComponent(ChangedateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
