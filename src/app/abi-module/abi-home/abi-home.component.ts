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

    // let chat_data: any = {};
    // chat_data.data = {};

    // chat_data.data.question = this.checkoutForm.value.query;
    // chat_data.data.date = `${date.getUTCDate()} ${date.toLocaleString('en-us',{month:'short', year:'numeric'})}`;
    // chat_data.data.status = "pending";
    // // data:
    //   // date: "28 Oct 2021"
    //   // question: "sdasd"
    //   // status: "pending"

    // console.log(chat_data)
    // // this.dataservice.setModuleTagged(chat_data);

    // localStorage.setItem("chats", JSON.stringify(chat_data));

    this.router.navigate(['chat-rm']);
    this.checkoutForm.reset();
  }

  ngOnDestroy() {
    this.dataservice.resetDataService();
  }


}
