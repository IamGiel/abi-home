import {
  HttpClient
} from '@angular/common/http';
import {
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit
} from '@angular/core';
import {
  DomSanitizer,
  SafeResourceUrl
} from '@angular/platform-browser';
import {
  Observable
} from 'rxjs';
import {
  DataServiceService
} from 'src/app/services/data-service.service';


@Component({
  selector: 'app-one-reach-container',
  templateUrl: './one-reach-container.component.html',
  styleUrls: ['./one-reach-container.component.scss']
})
export class OneReachContainerComponent implements OnInit, AfterViewInit, OnDestroy {
  there: any = null;
  test_token = "test_token";
  url: string = 'https://chat.staging.onereach.ai/GapF3hg0QZ-V3pVTbzuZQA/abi_v3?loader=light'; // abi v2
  urlSafe!: SafeResourceUrl;
  showLoader: boolean = true;
  module_tagged: any;
  onereach_chats = [];
  construct_obj: any = {};

  chat_headers = {
    'Authorization': 'Bearer 9d0a1468b95930e0ecc16a586ca395479edf22e133cb6a452a1c0dc3e3a59110f5d8eb78334c66339223302fccbae38d9ecf859c5a3f1fdfeef0f2d32223de37',
    'Content-Type': 'application/json'
  };

  constructor(
    private sanitizer: DomSanitizer,
    private dataservice: DataServiceService,
    public http: HttpClient,

  ) {}

  ngOnInit(): void {

    // this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(
    //   this.url + '?token=' + encodeURIComponent(this.localStorageService.retrieve('accessToken'))
    // );

    console.log(localStorage.getItem('message_to_onereach'));
    this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.url + `?token=${this.test_token}` + `?message=${localStorage.getItem('message_to_onereach')}`)
    // this.scrollToBottom();
  }
  ngAfterViewInit() {
    setTimeout(() => {
      this.showLoader = false;
      this.scrollToBottom();
      this.getModuleTagged()
    }, 12000);
  }

  getModuleTagged() {
    const headers = {
      'Authorization': 'Bearer 9d0a1468b95930e0ecc16a586ca395479edf22e133cb6a452a1c0dc3e3a59110f5d8eb78334c66339223302fccbae38d9ecf859c5a3f1fdfeef0f2d32223de37'
    }
    this.http.get < any > ("https://em.staging.api.onereach.ai/http/19aa45de-1834-419f-95de-95536f3b9940/sub/http/v1/module-triggered", {
      headers
    }).subscribe(data => {
      console.log(data)
      
      this.construct_obj.data = {};

      if (data) {
        let intent = JSON.parse(data._source.data).data;
        console.log(intent)
        
        this.construct_obj.data.intent = intent;
        this.construct_obj.id = this.construct_obj.data.intent.date
        
        
      }
    })
  }
  saveChats(payload): Observable < any > {
    // SAVE RECORD TO CHATS_ARR TABLE
    let chat_apis_url = "https://em.staging.api.onereach.ai/http/19aa45de-1834-419f-95de-95536f3b9940/sub/http/v1/chats_arr";
    return this.http.post(chat_apis_url, payload, {
      'headers': this.chat_headers
    })
  }
  getOneReachChatsArray(){
    // GET CHAT_HISTORY RECORD
    let onereachChatsURl = "https://em.staging.api.onereach.ai/http/19aa45de-1834-419f-95de-95536f3b9940/sub/http/v1/chat_history_api";
    this.http.get < any > (onereachChatsURl, {
      'headers': this.chat_headers
    }).subscribe(data => {
      console.log(JSON.parse(data.items[0]._source.data))
      if(JSON.parse(data.items[0]._source.data)){
        let ch_arr = JSON.parse(data.items[0]._source.data);
        this.construct_obj.data.transcripts = ch_arr;
        console.log("ADDING CHAT to RECORDS ", this.construct_obj)
          this.saveChats(this.construct_obj).subscribe(res=> {
            console.log(res)
          });
          this.deleteChatDataRecord();
      }
     
    })
  }
  deleteChatDataRecord(){
    // use this to delete the temporary chat detail history
    let onereachChatsURl = "https://em.staging.api.onereach.ai/http/19aa45de-1834-419f-95de-95536f3b9940/sub/http/v1/chat_history_api";
    this.http.delete < any > (onereachChatsURl, {
      'headers': this.chat_headers
    }).subscribe(data => {
      console.log(data)
    })
  }
  scrollToBottom(): void {
    window.scrollTo(0, document.body.scrollHeight);
  }
  ngOnDestroy() {
    this.getOneReachChatsArray();
    this.dataservice.resetDataService();
  }
}
