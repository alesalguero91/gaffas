import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WppComponent } from './wpp.component';

describe('WppComponent', () => {
  let component: WppComponent;
  let fixture: ComponentFixture<WppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WppComponent]
    });
    fixture = TestBed.createComponent(WppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
