import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-abi-home',
  templateUrl: './abi-home.component.html',
  styleUrls: ['./abi-home.component.scss']
})
export class AbiHomeComponent implements OnInit {

  constructor(
    public router:Router
  ) { }

  ngOnInit(): void {
  }

  goChatRm(){
    this.router.navigate(['/chat-rm']);
  }

}
