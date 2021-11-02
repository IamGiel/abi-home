import {
  Component,
  OnDestroy,
  OnInit
} from '@angular/core';
import {
  Router
} from '@angular/router';
import {
  FormBuilder,
  Validators
} from '@angular/forms';
import {
  DataServiceService
} from 'src/app/services/data-service.service';


@Component({
  selector: 'app-abi-home',
  templateUrl: './abi-home.component.html',
  styleUrls: ['./abi-home.component.scss']
})
export class AbiHomeComponent implements OnInit, OnDestroy {
  query_: any;
  checkoutForm = this.formBuilder.group({
    query: ["", Validators.required],
  });
  constructor(
    public router: Router,
    private formBuilder: FormBuilder,
    private dataservice: DataServiceService

  ) {}

  ngOnInit(): void {}

  goChatRm(q: any) {
    q.preventDefault()
    console.log(q)
    localStorage.setItem("message_to_onereach", q)

  }
  onSubmit(): void {
    let date = new Date();
    // console.log(date.toLocaleDateString());

    console.warn('your form has been submitted', this.checkoutForm.value.query);
    localStorage.setItem("message_to_onereach", this.checkoutForm.value.query)

    this.router.navigate(['chat-rm']);
    this.checkoutForm.reset();
  }

  ngOnDestroy() {
    this.dataservice.resetDataService();
  }


}
