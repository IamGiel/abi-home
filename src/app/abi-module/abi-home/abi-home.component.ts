import {
  Component,
  OnInit
} from '@angular/core';
import {
  Router
} from '@angular/router';
import {
  FormBuilder
} from '@angular/forms';


@Component({
  selector: 'app-abi-home',
  templateUrl: './abi-home.component.html',
  styleUrls: ['./abi-home.component.scss']
})
export class AbiHomeComponent implements OnInit {
  query_: any;
  checkoutForm = this.formBuilder.group({
    query: '',
  });
  constructor(
    public router: Router,
    private formBuilder: FormBuilder,

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

    let chat_data:any = {};
    chat_data.question = this.checkoutForm.value.query;
    chat_data.date = `${date.getUTCDate()} ${date.toLocaleString('en-us',{month:'short', year:'numeric'})}`;
    chat_data.status = "pending";
    chat_data.id = 1;

    console.log(chat_data)

    localStorage.setItem("chats", JSON.stringify(chat_data));

    this.router.navigate(['/chat-rm']);
    this.checkoutForm.reset();
  }


}
