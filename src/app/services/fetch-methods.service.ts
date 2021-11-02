import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
// api calls here
export class FetchMethodsService {
  chats_arr_url = "https://em.staging.api.onereach.ai/http/19aa45de-1834-419f-95de-95536f3b9940/sub/http/v1/chats_arr";
  chats_history_url = "https://em.staging.api.onereach.ai/http/19aa45de-1834-419f-95de-95536f3b9940/sub/http/v1/chat_history_api"; 
  module_triggered_url = "https://em.staging.api.onereach.ai/http/19aa45de-1834-419f-95de-95536f3b9940/sub/http/v1/module-triggered";
  
  chat_headers = {
    'Authorization': 'Bearer 9d0a1468b95930e0ecc16a586ca395479edf22e133cb6a452a1c0dc3e3a59110f5d8eb78334c66339223302fccbae38d9ecf859c5a3f1fdfeef0f2d32223de37',
    'Content-Type': 'application/json'
  };
  
  constructor(
    public http: HttpClient  
  ) { }

  // chats_data record
  fetch_chatsData_get(){
    return this.http.get <any> (this.chats_arr_url, {
      'headers': this.chat_headers
    })
  }
  fetch_chatsData_Post(payload){
    return this.http.post(this.chats_arr_url, payload, {
      'headers': this.chat_headers
    })
  }
  // chat_history_api record
  fetch_chatHistory_get(){
    return this.http.get < any > (this.chats_history_url, {
      'headers': this.chat_headers
    })
  }
  
  // module-triggered record
  fetch_moduleTriggered_get(){
    return this.http.get <any> (this.module_triggered_url, {
      'headers': this.chat_headers
    })
  }


}
