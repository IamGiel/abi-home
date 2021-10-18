import {
  Component,
  OnInit
} from '@angular/core';
import {
  Router
} from '@angular/router';

@Component({
  selector: 'app-abi',
  templateUrl: './abi.component.html',
  styleUrls: ['./abi.component.scss']
})
export class AbiComponent implements OnInit {
  selected_nav: any;
  constructor(
    public router: Router
  ) {}

  ngOnInit(): void {
    this.selected_nav = "chat";
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
    // this.show = clicked_item
  }

}
