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
import { FetchMethodsService } from 'src/app/services/fetch-methods.service';


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

  constructor(
    private sanitizer: DomSanitizer,
    private dataservice: DataServiceService,
    public http: HttpClient,
    private fetchData: FetchMethodsService


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
    this.fetchData.fetch_moduleTriggered_get().subscribe(data => {
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
  saveChats(payload){
    // SAVE RECORD TO CHATS_ARR TABLE
    this.fetchData.fetch_chatsData_Post(payload).subscribe(res=>{
      console.log("saving to chats_arr... ", res)
    })
  }
  getOneReachChatsArray(){
    // GET CHAT_HISTORY RECORD
    this.fetchData.fetch_chatHistory_get().subscribe(data => {
      console.log(JSON.parse(data.items[0]._source.data))
      if(JSON.parse(data.items[0]._source.data)){
        let ch_arr = JSON.parse(data.items[0]._source.data);
        this.construct_obj.data.transcripts = ch_arr;
        console.log("ADDING CHAT to RECORDS ", this.construct_obj)
          this.saveChats(this.construct_obj);
      }
     
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
