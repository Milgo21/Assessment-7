import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddparcelComponent } from './addparcel.component';

describe('AddparcelComponent', () => {
  let component: AddparcelComponent;
  let fixture: ComponentFixture<AddparcelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddparcelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddparcelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
