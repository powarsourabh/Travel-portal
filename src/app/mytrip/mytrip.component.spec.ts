import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MytripComponent } from './mytrip.component';

describe('MytripComponent', () => {
  let component: MytripComponent;
  let fixture: ComponentFixture<MytripComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MytripComponent]
    });
    fixture = TestBed.createComponent(MytripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
