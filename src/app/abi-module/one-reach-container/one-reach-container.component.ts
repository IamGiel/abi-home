import {
  AfterViewInit,
  Component,
  OnInit
} from '@angular/core';
import {
  DomSanitizer,
  SafeResourceUrl
} from '@angular/platform-browser';

@Component({
  selector: 'app-one-reach-container',
  templateUrl: './one-reach-container.component.html',
  styleUrls: ['./one-reach-container.component.scss']
})
export class OneReachContainerComponent implements OnInit, AfterViewInit {

  there: any = null;
  test_token = "test_token";
  url: string = 'https://chat.staging.onereach.ai/GapF3hg0QZ-V3pVTbzuZQA/abi_v3?loader=light'; // abi v2
  urlSafe!: SafeResourceUrl;
  showLoader: boolean= true;

  constructor(
    private sanitizer: DomSanitizer,
  ) {}

  ngOnInit(): void {
    // this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(
    //   this.url + '?token=' + encodeURIComponent(this.localStorageService.retrieve('accessToken'))
    // );
    if (!this.there) {
      setTimeout(() => {
        this.showLoader = false;
      }, 10000);
    }
    console.log(localStorage.getItem('message_to_onereach'));
    this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.url + `?token=${this.test_token}` + `?message=${localStorage.getItem('message_to_onereach')}`)
  }
  ngAfterViewInit() {
    localStorage.removeItem('message_to_onereach');
  }
}
