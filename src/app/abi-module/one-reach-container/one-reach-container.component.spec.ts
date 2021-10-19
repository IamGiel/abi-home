import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneReachContainerComponent } from './one-reach-container.component';

describe('OneReachContainerComponent', () => {
  let component: OneReachContainerComponent;
  let fixture: ComponentFixture<OneReachContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OneReachContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OneReachContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
