import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-abi-home',
  templateUrl: './abi-home.component.html',
  styleUrls: ['./abi-home.component.scss']
})
export class AbiHomeComponent implements OnInit {
  query_:any;
  constructor(
    public router:Router
  ) { }

  ngOnInit(): void {
  }

  goChatRm(q:any){
    console.log(q)
    localStorage.setItem("message_to_onereach", q)
    this.router.navigate(['/chat-rm']);
  }

}
