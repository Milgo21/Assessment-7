import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayparcelsComponent } from './displayparcels.component';

describe('DisplayparcelsComponent', () => {
  let component: DisplayparcelsComponent;
  let fixture: ComponentFixture<DisplayparcelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayparcelsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayparcelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
