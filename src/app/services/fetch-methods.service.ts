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
  constructor(
    http:HttpClient
  ) { }

  // chats_data record
  fetch_chatsData(){
    
  }
  // chat_history_api
  fetch_chatHistory(){
    
  }
  // module-triggered
  fetch_moduleTriggered(){

  }


}
