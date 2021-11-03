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
    // console.log(this.messages_array)
    // console.log(JSON.parse(this.messages_array))
    this.chats_arr = JSON.parse(this.messages_array).data;
    // console.log(this.chats_arr)
  }
  ngOnChanges(){
    // this.renderTheHTML()
    this.chats_arr = JSON.parse(this.messages_array).data;
    // console.log(this.chats_arr)
  }

  renderTheHTML(){
    // if(this.messages_array.data.length > 0){
    //   for (let i = 0; i < this.messages_array.data.length; i++) {
    //     const element = this.messages_array.data[i];
      
    //     // this.the_HTML += `${element.message?element.message : ''}\n\n`;
    //   }
    // }
  }

}
