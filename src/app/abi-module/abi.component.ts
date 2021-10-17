import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-abi',
  templateUrl: './abi.component.html',
  styleUrls: ['./abi.component.scss']
})
export class AbiComponent implements OnInit {

  constructor(
    public router:Router
  ) { }

  ngOnInit(): void {
  }
  goChat(){
    this.router.navigate(['/chat']);
  }

}
