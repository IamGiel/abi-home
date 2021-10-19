import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-abi-chat',
  templateUrl: './abi-chat.component.html',
  styleUrls: ['./abi-chat.component.scss']
})
export class AbiChatComponent implements OnInit {
  selected_nav: any;
  chats = [
    {
      "chatid":123,
      "date":'09 Sep 2023',
      "module":"Supplier Intelligence",
      "status":"completed"
    },
    {
      "chatid":234,
      "date":'09 Sep 2023',
      "module":"Supplier Intelligence",
      "status":"completed"
    },
    {
      "chatid":345,
      "date":'09 Sep 2023',
      "module":"Pending",
      "status":"pending"
    },
    {
      "chatid":123,
      "date":'09 Sep 2023',
      "module":"Supplier Intelligence",
      "status":"completed"
    },
    {
      "chatid":234,
      "date":'09 Sep 2023',
      "module":"Supplier Intelligence",
      "status":"completed"
    },
    {
      "chatid":345,
      "date":'09 Sep 2023',
      "module":"Pending",
      "status":"completed"
    },
    {
      "chatid":123,
      "date":'09 Sep 2023',
      "module":"Supplier Intelligence",
      "status":"completed"
    },
    {
      "chatid":234,
      "date":'09 Sep 2023',
      "module":"Supplier Intelligence",
      "status":"completed"
    },
    {
      "chatid":345,
      "date":'09 Sep 2023',
      "module":"Pending",
      "status":"pending"
    },
    {
      "chatid":123,
      "date":'09 Sep 2023',
      "module":"Supplier Intelligence",
      "status":"completed"
    },
    {
      "chatid":234,
      "date":'09 Sep 2023',
      "module":"Supplier Intelligence",
      "status":"completed"
    },
    {
      "chatid":345,
      "date":'09 Sep 2023',
      "module":"Pending",
      "status":"completed"
    }
  ];
  constructor(
    public router: Router
  ) { }

  ngOnInit(): void {
    this.selected_nav = "chat";
  }
  goChat(clicked_item: any) {
    this.selected_nav = clicked_item;
    if (clicked_item == 'chat') {
      this.router.navigate(['/abi-ai/chat']);

    }
    if (clicked_item == 'reports') {
      this.router.navigate(['/abi-ai/reports']);
    }
    if (clicked_item == 'files') {
      this.router.navigate(['/abi-ai/files']);
    }
    // this.show = clicked_item
  }

}
