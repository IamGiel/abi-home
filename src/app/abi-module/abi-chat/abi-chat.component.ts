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
  chat_headers = {
    'Authorization': 'Bearer 9d0a1468b95930e0ecc16a586ca395479edf22e133cb6a452a1c0dc3e3a59110f5d8eb78334c66339223302fccbae38d9ecf859c5a3f1fdfeef0f2d32223de37',
    'Content-Type': 'application/json'
  };
  CHATS_URL = "https://em.staging.api.onereach.ai/http/19aa45de-1834-419f-95de-95536f3b9940/sub/http/v1/chats_arr";

  chatLength: any;
  module_tagged: any;
  intent_service: any;
  chat_rendered = true;

  chat_history = {}
  // {
  //   "messages":[
  //     {
  //       "stepId": "e39631e9-6a1b-4c0c-b6b2-59d1f314858f",
  //       "id": "8f9d7c98-b5d6-4211-84b4-e29ac9307766",
  //       "message": "Im ABI173.  Ask me.  I will return the NLU entities extracted from your question.",
  //       "medias": [],
  //       "useCustomAnswer": false,
  //       "userAnswerFunction": null,
  //       "userAnswerVariables": [],
  //       "userAnswerFunctionParams": {
  //         "userReply": "String"
  //       },
  //       "answerComponent": {
  //         "component": "or-textbox",
  //         "vBind": {
  //           "name": "or-textbox",
  //           "placeholder": "",
  //           "textInputType": "text"
  //         },
  //         "showComponentInMessage": false
  //       },
  //       "additionalContent": {
  //         "additionalScript": ""
  //       },
  //       "isSuggestionInput": true,
  //       "placeholder": "",
  //       "suggestionsType": "emty",
  //       "time": 1635433219574
  //     },
  //     {
  //       "answer": {
  //         "message": "asdasd",
  //         "userReply": "asdasd",
  //         "userText": "asdasd",
  //         "preventContinueFlow": false,
  //         "messageId": null,
  //         "type": "sync",
  //         "expire": 1635436756659,
  //         "name": "H7Ie6ebyvHcCGVQ=",
  //         "id": "Y6Btfo5xeiesVTOC4x5xs",
  //         "v": 0,
  //         "callback": {
  //           "type": "sync",
  //           "expire": 1635436756659,
  //           "name": "H7Ie6ebyvHcCGVQ=",
  //           "id": "Y6Btfo5xeiesVTOC4x5xs",
  //           "v": 0
  //         }
  //       },
  //       "time": 1635433225654,
  //       "id": "2e212f48-3f88-4345-8774-d9ee7dbf0dc2"
  //     },
  //     {
  //       "message": "skillNone\n\nasdasd\n\n4.78\n\nENTITIES: \n\n[\n  {\n    \"parsedValue\": \"asdasd\",\n    \"value\": \"asdasd\",\n    \"entity\": \"KeyNameEntity\",\n    \"detailedType\": \"KeyNameEntity\",\n    \"startPos\": 0,\n    \"endPos\": 6,\n    \"entityName\": \"KeyNameEntity\",\n    \"confidence\": 100\n  }\n]\n\n\nTEST RES:\n{\n  \"geo_type\": \"KeyNameEntity\",\n  \"KeyNameEntity\": \"asdasd\"\n}\n\nLocation: \n\n",
  //       "stepId": "db374707-0ecc-4a5e-9656-c34204557a0d",
  //       "id": "d1de4c8c-2e9a-4c67-95b3-6e7cad53bdec",
  //       "time": 1635433226984
  //     },
  //     {
  //       "stepId": "15160918-d313-4172-8d7a-875342b70194",
  //       "id": "fa1356c9-b703-4083-b50e-dc8a9d265d38",
  //       "message": "Creating your chat transcript...",
  //       "medias": [],
  //       "userAnswerFunction": null,
  //       "userAnswerVariables": [],
  //       "userAnswerFunctionParams": {},
  //       "answerComponent": {
  //         "component": "custom",
  //         "vBind": {
  //           "name": "custom",
  //           "vars": [{
  //             "varName": "headerLogo",
  //             "varValue": "https://onereach.ai/wp-content/uploads/2017/09/LogoMaster_Oct29_18_LargeForNav-e1571323917293.png"
  //           }, {
  //             "varName": "chatId",
  //             "varValue": "0vj6cud"
  //           }, {
  //             "varName": "chatTitle",
  //             "varValue": ""
  //           }, {
  //             "varName": "iconBot",
  //             "varValue": "https://www.beroeinc.com/assets/images/beroe-live-v3/abi.gif"
  //           }, {
  //             "varName": "iconUser",
  //             "varValue": "https://image.flaticon.com/icons/svg/145/145867.svg"
  //           }, {
  //             "varName": "timeLocaleFormat",
  //             "varValue": "en-GB"
  //           }, {
  //             "varName": "nameBot",
  //             "varValue": "Abi-p151"
  //           }, {
  //             "varName": "nameUser",
  //             "varValue": "User"
  //           }],
  //           "templateType": "html",
  //           "hideAfterSubmit": false,
  //           "showBotIcon": false,
  //           "autoSubmit": false,
  //           "css": ".custom-component-ecdc6ef73f004d738f6f2d074d0cdb0c {\n  /*\n  not required\n*/ }\n",
  //           "cssWrapperClassName": "custom-component-ecdc6ef73f004d738f6f2d074d0cdb0c",
  //           "scripts": [],
  //           "html": "<!--not required",
  //           "javascript": "////////////////////////////////////////////////////////////////////\r\n//TRANSCRIBE LOCAL STORAGE CACHE\r\n\r\n\r\n//get current conversation from localstorage\r\nconst tmprwcls = JSON.parse(localStorage.getItem('__rwc'));\r\nconst rwcls = _.values(tmprwcls[chatId]).sort((a, b) => b.timestamp - a.timestamp);\r\nconst convo = rwcls[0];\r\n//\r\n\r\nconsole.log(\"this is gel \",  JSON.stringify(convo));\r\n\r\n//step ui inputs\r\nconst IMAGE_HEADER = headerLogo \r\nconst CHAT_TITLE = chatTitle\r\nconst NAME_BOT = nameBot\r\nconst NAME_USER = nameUser\r\nconst ICON_BOT = iconBot\r\nconst ICON_USER = iconUser\r\nconst SIDE_BOT = 'left'\r\nconst SIDE_USER = 'right'\r\nconst TIME_FORMAT = timeLocaleFormat\r\n//\r\n\r\n//create transcription array and html\r\nvar chatStartTime = new Date(convo.timestamp); \r\nvar chatArray = [];\r\nvar chatHtml = '';\r\n\r\nchatArray.push(`Chat Title: ${CHAT_TITLE}`)\r\nchatArray.push(`Chat Time: ${chatStartTime}`)\r\n\r\nchatHtml += `<!DOCTYPE html><html><head>\r\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\"> \r\n<style> \r\n:root { --body-bg: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%); --msger-bg: #fff; --border: 2px solid #ddd; --left-msg-bg: #ececec; --right-msg-bg: #579ffb; }\r\nhtml { box-sizing: border-box; }\r\n*, *:before, *:after { margin: 0; padding: 0; box-sizing: inherit; }\r\nbody { display: flex; justify-content: center; align-items: center; /*height: 100vh; remove scrolling for pdf*/ background-image: var(--body-bg); font-family: Helvetica, sans-serif; }\r\n.msger { display: flex; flex-flow: column wrap; justify-content: space-between; width: 100%; max-width: 867px; margin: 25px 10px; height: calc(100% - 50px); border: var(--border); border-radius: 5px; background: var(--msger-bg); box-shadow: 0 15px 15px -5px rgba(0, 0, 0, 0.2); }\r\n.msger-header { align-items: flex-end;justify-content: space-between; padding: 10px; border-bottom: var(--border); background: #eee; color: #666; }\r\n.msger-chat { flex: 1; overflow-y: auto; padding: 10px; } .msger-chat::-webkit- scrollbar { width: 6px; } .msger-chat::-webkit-scrollbar-track { background: #ddd; } .msger-chat::-webkit-scrollbar-thumb { background: #bdbdbd; } .msg { display: flex; align-items: flex-end; margin-bottom: 10px; } .msg:last-of-type { margin: 0; } .msg-img { width: 50px; height: 50px; margin-right: 10px; background: #ddd; background-repeat: no-repeat; background-position: center; background-size: cover; border-radius: 50%; } .msg-bubble { max-width: 450px; padding: 15px; border-radius: 15px; background: var(--left-msg-bg); } .msg-info { display: flex; justify-content: space-between; align-items: center; margin- bottom: 10px; } .msg-info-name { margin-right: 10px; font-weight: bold; } .msg- info-time { font-size: 0.85em; }\r\n.left-msg .msg-bubble { border-bottom-left-radius: 0; }\r\n.right-msg { flex-direction: row-reverse; } .right-msg .msg-bubble { background: var(--right-msg-bg); color: #fff; border-bottom-right-radius: 0; } .right-msg .msg-img { margin: 0 0 0 10px; }\r\n.msger-chat { background-color: #fcfcfe; } \r\n</style> </head>\r\n<body><section class=\"msger\">\r\n  <header class=\"msger-header\">\r\n    <img src=\"${IMAGE_HEADER}\" >\r\n    <div class=\"msger-header-title\">${CHAT_TITLE}</div>\r\n    <div class=\"msger-header-title\">${chatStartTime}</div>\r\n  </header>\r\n  <main class=\"msger-chat\">\r\n  `;\r\n\r\n\r\n\r\n_.forEach(convo.messages, component => {\r\n\r\n  if(component.message){\r\n    appendMessage(NAME_BOT, ICON_BOT, SIDE_BOT, component)\r\n  }\r\n  else if (component.answer){\r\n    appendMessage(NAME_USER, ICON_USER, SIDE_USER, createMessageText(component))\r\n  } \r\n\r\n})\r\n\r\nchatHtml += `</main></section></body></html>`;\r\n//\r\n\r\n//functions \r\nfunction createMessageText(component){\r\n\r\n  //RATING RESPONSE\r\n  //cannot trust answerComponent as its not on some other component responses. ?!?\r\n  //message does not exist so we'll create it.\r\n  if(component.answer.rating){\r\n    component.message = `Rating: ${component.answer.rating}, Feedback: `\r\n      component.answer.feedback\r\n    if(typeof component.answer.feedback !== 'undefined')\r\n      component.message += component.answer.feedback\r\n  }\r\n\r\n  //SLIDER RESPONSE\r\n  //no answerComponent\r\n  //message does exist but contains html, we will override the message with clean\r\n  else if(component.answer.value && component.answer.units)  //this might be risky if other components have same, but no other option\r\n    component.message = `${component.answer.value} ${component.answer.units}`\r\n\r\n  //LOCATION RESPONSE\r\n  //has answer component !?!\r\n  //no message, lets create it and handle displaying the image in append func.\r\n  else if(component.answer.location){\r\n    component.message = `Latitude: ${component.answer.location.lat}, Longitude: ${component.answer.location.lng}`\r\n    component.image = component.answer.image\r\n  }\r\n  \r\n  \r\n  else // handle text answer\r\n    component.message = component.answer.message\r\n\r\nreturn component\r\n}\r\n\r\n\r\nfunction appendMessage(name, img, side, component) {\r\n  \r\n  //handle location as its the only message that contains extra div (currently?!?)\r\n  if(typeof component.image === \"undefined\"){\r\n    chatHtml += `\r\n      <div class=\"msg ${side}-msg\">\r\n        <div class=\"msg-img\" style=\"background-image: url(${img})\"></div>\r\n        <div class=\"msg-bubble\">\r\n          <div class=\"msg-info\">\r\n            <div class=\"msg-info-name\">${name}</div>\r\n            <div class=\"msg-info-time\">${formatTime(component.time)}</div>\r\n          </div>\r\n          <div class=\"msg-text\">\r\n            ${component.message}          \r\n            </div>\r\n        </div>\r\n      </div>\r\n    `;\r\n    \r\n    chatArray.push(`Bot: ${component.message}`)\r\n  }\r\n  else {\r\n     chatHtml += `\r\n      <div class=\"msg ${side}-msg\">\r\n        <div class=\"msg-img\" style=\"background-image: url(${img})\"></div>\r\n        <div class=\"msg-bubble\">\r\n          <div class=\"msg-info\">\r\n            <div class=\"msg-info-name\">${name}</div>\r\n            <div class=\"msg-info-time\">${formatTime(component.time)}</div>\r\n          </div>\r\n          <div class=\"msg-location\">\r\n            <img src=\"${component.image}\" alt=\"Location\">\r\n          </div>\r\n          <div class=\"msg-text\">\r\n            ${component.message}          \r\n            </div>\r\n        </div>\r\n      </div>\r\n    `;\r\n    \r\n    chatArray.push(`Bot: ${component.message}`)\r\n  }\r\n  \r\n}\r\n\r\nfunction formatTime(date) {\r\n  return new Date(date).toLocaleTimeString(timeLocaleFormat) \r\n}\r\n//\r\n\r\n//console logging\r\nconsole.log(chatArray)\r\nconsole.log(chatHtml)\r\n//\r\n\r\n\r\n//return myData to rwc\r\n// sendMessage({ \r\n//     message: ``, \r\n//     myData: {\"chatArray\":chatArray, \"html\":chatHtml}\r\n//   })\r\nsendMessage({ \r\n    message: ``, \r\n    myData: \"tmprwcls\"\r\n  })\r\n\r\n\r\n/////////////////////////////////////////////////////////////////\r\n\r\n"
  //         },
  //         "showComponentInMessage": true
  //       },
  //       "additionalContent": {
  //         "additionalScript": ""
  //       },
  //       "time": 1635433227401
  //     }
  //   ]
  // }

  constructor(
    public router: Router,
    public http: HttpClient,
    private dataservice: DataServiceService
  ) {}

  ngOnInit(): void {
    this.selected_nav = "chat";
    // this.getModuleType();
    // this.dataservice.getChats.subscribe(chats => {
    //   // console.log(chats)
    //   this.getChats();

    // })
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
  }

  getChats() {
    const headers = {
      'Authorization': 'Bearer 9d0a1468b95930e0ecc16a586ca395479edf22e133cb6a452a1c0dc3e3a59110f5d8eb78334c66339223302fccbae38d9ecf859c5a3f1fdfeef0f2d32223de37'
    }
    let chat_apis_url = "https://em.staging.api.onereach.ai/http/19aa45de-1834-419f-95de-95536f3b9940/sub/http/v1/chats_arr";
    this.http.get < any > (chat_apis_url, {
      headers
    }).subscribe(data => {
      console.log("get chats from abi-chat ", data)
      if (data.items) {
        this.loader = false;
        data.items.forEach(k => {

          let dta = JSON.parse(k._source.data)
          // console.log(dta)
          this.chats.push(dta)

        });
        
        
      }


    },
    err=> {
      console.log(err)
    }
    )
  }

  sortBy(prop: any, data) {
    return data.sort((a, b) => a[prop] > b[prop] ? 1 : a[prop] === b[prop] ? 0 : -1);
  }

  convertTimeStamp(stamp) {
    let the_date = new Date(parseInt(stamp)).toString().slice(0,10)
    return the_date;
  }

  goToChatSnapShot(chat_item){
    console.log(chat_item.data.transcripts)
    console.log(chat_item.id)
    this.isSlected_id  = chat_item.id;
    this.chat_rendered = false;
    this.chat_history = chat_item.data.transcripts;
  }

  ngOnDestroy() {
    this.dataservice.resetDataService();
  }
}
