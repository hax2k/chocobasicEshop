import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UslistComponent } from './uslist.component';

describe('UslistComponent', () => {
  let component: UslistComponent;
  let fixture: ComponentFixture<UslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UslistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
