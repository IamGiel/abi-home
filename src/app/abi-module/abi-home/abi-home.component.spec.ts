import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbiHomeComponent } from './abi-home.component';

describe('AbiHomeComponent', () => {
  let component: AbiHomeComponent;
  let fixture: ComponentFixture<AbiHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbiHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbiHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
