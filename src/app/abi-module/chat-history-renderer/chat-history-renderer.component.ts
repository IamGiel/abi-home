import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-chat-history-renderer',
  templateUrl: './chat-history-renderer.component.html',
  styleUrls: ['./chat-history-renderer.component.scss']
})
export class ChatHistoryRendererComponent implements OnInit, OnChanges {
  @Input() messages_array;
  chats_arr:any;
  sub:any;
  constructor() { }

  ngOnInit(): void {
    console.log(this.messages_array)
  }
  ngOnChanges(){
    this.renderTheHTML()
  }

  renderTheHTML(){
    if(this.messages_array.length > 0){
      for (let i = 0; i < this.messages_array.length; i++) {
        const element = this.messages_array[i];
      
        // this.the_HTML += `${element.message?element.message : ''}\n\n`;
      }
    }
  }

}
