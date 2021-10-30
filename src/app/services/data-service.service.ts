import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  public module_tagged = new BehaviorSubject(null);
  getModuleTagged = this.module_tagged.asObservable();

  public chats_array = new BehaviorSubject(null);
  getChats = this.chats_array.asObservable();

  constructor() { }

  resetDataService() {
    this.module_tagged.next(null);
  }

  setModuleTagged(message: string) {
    this.module_tagged.next(message);
  }

  setChatArrays(message: string) {
    this.chats_array.next(message);
  }
}
