import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatHistoryRendererComponent } from './chat-history-renderer.component';

describe('ChatHistoryRendererComponent', () => {
  let component: ChatHistoryRendererComponent;
  let fixture: ComponentFixture<ChatHistoryRendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatHistoryRendererComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatHistoryRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
