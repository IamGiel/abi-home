import {
  HttpClient
} from '@angular/common/http';
import {
  Component,
  OnInit
} from '@angular/core';
import {
  Router
} from '@angular/router';
import {
  Observable
} from 'rxjs';

@Component({
  selector: 'app-abi-chat',
  templateUrl: './abi-chat.component.html',
  styleUrls: ['./abi-chat.component.scss']
})
export class AbiChatComponent implements OnInit {
  selected_nav: any;
  // chats = [
  //   {
  //     "chatid":123,
  //     "date":'09 Sep 2023',
  //     "module":"Supplier Intelligence",
  //     "status":"completed"
  //   },
  //   {
  //     "chatid":234,
  //     "date":'09 Sep 2023',
  //     "module":"Supplier Intelligence",
  //     "status":"completed"
  //   },
  //   {
  //     "chatid":345,
  //     "date":'09 Sep 2023',
  //     "module":"Global Data",
  //     "status":"pending"
  //   },
  //   {
  //     "chatid":123,
  //     "date":'09 Sep 2023',
  //     "module":"Market Intelligence",
  //     "status":"completed"
  //   },
  //   {
  //     "chatid":234,
  //     "date":'09 Sep 2023',
  //     "module":"Supplier Intelligence",
  //     "status":"completed"
  //   },
  //   {
  //     "chatid":345,
  //     "date":'09 Sep 2023',
  //     "module":"Global Data",
  //     "status":"completed"
  //   },
  //   {
  //     "chatid":123,
  //     "date":'09 Sep 2023',
  //     "module":"Supplier Intelligence",
  //     "status":"completed"
  //   },
  //   {
  //     "chatid":234,
  //     "date":'09 Sep 2023',
  //     "module":"Supplier Intelligence",
  //     "status":"completed"
  //   },
  //   {
  //     "chatid":345,
  //     "date":'09 Sep 2023',
  //     "module":"Global Data",
  //     "status":"pending"
  //   },
  //   {
  //     "chatid":123,
  //     "date":'09 Sep 2023',
  //     "module":"Supplier Intelligence",
  //     "status":"completed"
  //   },
  //   {
  //     "chatid":234,
  //     "date":'09 Sep 2023',
  //     "module":"Market Intelligence",
  //     "status":"ended"
  //   },
  //   {
  //     "chatid":345,
  //     "date":'09 Sep 2023',
  //     "module":"Global Data",
  //     "status":"ended"
  //   }
  // ];

  chats = [];
  chat_data: any = {};
  triggered_module: any = '';
  chat_headers = {
    'Authorization': 'Bearer 9d0a1468b95930e0ecc16a586ca395479edf22e133cb6a452a1c0dc3e3a59110f5d8eb78334c66339223302fccbae38d9ecf859c5a3f1fdfeef0f2d32223de37',
    'Content-Type': 'application/json'
  };
  CHATS_URL = "https://em.staging.api.onereach.ai/http/19aa45de-1834-419f-95de-95536f3b9940/sub/http/v1/chats_arr";


  // chatLength = this.chats.length;
  chatLength = localStorage.getItem("chats").length;

  constructor(
    public router: Router,
    public http: HttpClient
  ) {}

  ngOnInit(): void {
    this.selected_nav = "chat";
    // this.chats = JSON.parse(localStorage.getItem("chats"))

    // get array from local storate 
    // set it on HTML ngfor

    // this.chats.push();
    // console.log(this.chats)
    // push chats to record to keep track! 
    this.getModuleType();
    this.getChats();

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

  getModuleType() {
    const headers = {
      'Authorization': 'Bearer 9d0a1468b95930e0ecc16a586ca395479edf22e133cb6a452a1c0dc3e3a59110f5d8eb78334c66339223302fccbae38d9ecf859c5a3f1fdfeef0f2d32223de37'
    }
    this.http.get < any > ("https://em.staging.api.onereach.ai/http/19aa45de-1834-419f-95de-95536f3b9940/sub/http/v1/module-triggered", {
      headers
    }).subscribe(data => {
      let parsed_data = JSON.parse(data._source.data)
      // console.log(parsed_data)

      if (parsed_data) {

        let ch:any = JSON.parse(localStorage.getItem('chats'));
        // console.log(ch.id)
        const body: any = {}; // were saving these!
        body.id = new Date().getTime();
        body.data = {};
        body.data.ch = ch;
        body.data.mod = parsed_data.data;

        console.log(body)

        this.saveChats(body).subscribe(res => {
          console.log(res)
        });
      }

    })


  }

  saveChats(payload): Observable < any > {
    console.log(payload)
    return this.http.post(this.CHATS_URL, payload, {
      'headers': this.chat_headers
    })
  }

  getChats() {
    const headers = {
      'Authorization': 'Bearer 9d0a1468b95930e0ecc16a586ca395479edf22e133cb6a452a1c0dc3e3a59110f5d8eb78334c66339223302fccbae38d9ecf859c5a3f1fdfeef0f2d32223de37'
    }
    this.http.get < any > (this.CHATS_URL, {
      headers
    }).subscribe(data => {
      console.log(data.items)
      data.items.forEach(k => {

        let dta = JSON.parse(k._source.data)
        console.log(dta)
        this.chats.push(dta)
      });

    })
  }

  sortBy(prop: any, data) {
    return data.sort((a, b) => a[prop] > b[prop] ? 1 : a[prop] === b[prop] ? 0 : -1);
  }
  // {"source":{"id":1,"data":"skillPriceCost"},"chats":[{"question":"what is the price of cotton","date":"26 Oct 2021","status":"pending","id":1635209270226}],"id":1635209271397}

}
