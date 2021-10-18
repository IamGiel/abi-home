import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss']
})
export class PreviewComponent implements OnInit {
  chats = [
    {
      "chatid":123,
      "date":'09 Sep 2023',
      "module":"Supplier Intelligence"
    },
    {
      "chatid":234,
      "date":'09 Sep 2023',
      "module":"Supplier Intelligence"
    },
    {
      "chatid":345,
      "date":'09 Sep 2023',
      "module":"Pending"
    }
  ];
  constructor() { }

  ngOnInit(): void {}

}
