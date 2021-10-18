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
  projects = [
    {
      "chatid":123,
      "date":'09 Sep 2023',
      "name":"Charlie Jo",
      "status":"requested"
    },
    {
      "chatid":234,
      "date":'09 Sep 2023',
      "name":"Linh Nguyen",
      "status":"completed"
    },
    {
      "chatid":123,
      "date":'09 Sep 2023',
      "name":"Charlie Jo",
      "status":"requested"
    },
    {
      "chatid":234,
      "date":'09 Sep 2023',
      "name":"Linh Nguyen",
      "status":"completed"
    }
  ];
  files = [
    {
      "chatid":123,
      "date":'09 Sep 2023',
      "name":"Powerpoint-doc.ppt",
      "type":"ppt"
    },
    {
      "chatid":234,
      "date":'09 Sep 2023',
      "name":"Excel-doc.xml",
      "type":"xml"
    },
    {
      "chatid":123,
      "date":'09 Sep 2023',
      "name":"Document-word.doc",
      "type":"doc"
    },
    {
      "chatid":234,
      "date":'09 Sep 2023',
      "name":"Powerpoint-doc.ppt",
      "type":"ppt"
    }
  ];
  constructor() { }

  ngOnInit(): void {}
  checkStatus(status:any){
    console.log(status)
  }

}
