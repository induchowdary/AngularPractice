import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlyastericComponent } from './glyasteric.component';

describe('GlyastericComponent', () => {
  let component: GlyastericComponent;
  let fixture: ComponentFixture<GlyastericComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlyastericComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlyastericComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
