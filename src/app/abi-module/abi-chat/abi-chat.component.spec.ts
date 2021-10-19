import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbiChatComponent } from './abi-chat.component';

describe('AbiChatComponent', () => {
  let component: AbiChatComponent;
  let fixture: ComponentFixture<AbiChatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbiChatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbiChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
