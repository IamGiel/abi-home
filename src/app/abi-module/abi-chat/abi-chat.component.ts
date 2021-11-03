import {
  HttpClient
} from '@angular/common/http';
import {
  Component,
  OnDestroy,
  OnInit
} from '@angular/core';
import {
  Router
} from '@angular/router';
import {
  Observable
} from 'rxjs';
import {
  DataServiceService
} from 'src/app/services/data-service.service';
import { FetchMethodsService } from 'src/app/services/fetch-methods.service';

@Component({
  selector: 'app-abi-chat',
  templateUrl: './abi-chat.component.html',
  styleUrls: ['./abi-chat.component.scss']
})
export class AbiChatComponent implements OnInit, OnDestroy {
  selected_nav: any;
  isSlected_id: any;

  chats = [];
  chat_data: any = {};
  triggered_module: any = '';
  loader = true;

  chatLength: any;
  module_tagged: any;
  intent_service: any;
  chat_rendered = true;

  chat_history = {};

  constructor(
    public router: Router,
    public http: HttpClient,
    private dataservice: DataServiceService,
    private fetchData: FetchMethodsService
  ) {}

  ngOnInit(): void {
    this.selected_nav = "chat";
    setTimeout(() => {
      this.getChats();
    }, 12000);
    

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
  }

  getChats() {
    this.fetchData.fetch_chatsData_get().subscribe(data => {
      console.log("get cha ", data)
      if (data.items) {
        this.loader = false;
        data.items.forEach(k => {

          let dta = JSON.parse(k._source.data)
          // console.log(dta)
          this.chats.push(dta)

        });
      } else {
       
      }
    },
    err=> {
      console.log(err)
      if(err.error.result == "no record"){
        alert("no data to show!")
        this.loader = null;
      }
    }
    )

    console.log(this.loader)
  }

  sortBy(prop: any, data) {
    return data.sort((a, b) => a[prop] > b[prop] ? 1 : a[prop] === b[prop] ? 0 : -1);
  }

  convertTimeStamp(stamp) {
    let the_date = new Date(parseInt(stamp)).toString().slice(0,10)
    return the_date;
  }

  goToChatSnapShot(chat_item){
    // console.log(chat_item.data.transcripts)
    // console.log(chat_item.id)
    this.isSlected_id  = chat_item.id;
    this.chat_rendered = false;
    this.chat_history = chat_item.data.transcripts;
  }

  ngOnDestroy() {
    this.dataservice.resetDataService();
  }
}
