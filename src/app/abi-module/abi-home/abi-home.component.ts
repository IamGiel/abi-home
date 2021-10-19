import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-abi-home',
  templateUrl: './abi-home.component.html',
  styleUrls: ['./abi-home.component.scss']
})
export class AbiHomeComponent implements OnInit {
  query_:any;
  checkoutForm = this.formBuilder.group({
    query: '',
  });
  constructor(
    public router:Router,
    private formBuilder: FormBuilder,

  ) { }

  ngOnInit(): void {
  }

  goChatRm(q:any){
    q.preventDefault()
    console.log(q)
    localStorage.setItem("message_to_onereach", q)
  
  }
  onSubmit(): void {
    // Process checkout data here
    console.warn('Your order has been submitted', this.checkoutForm.value.query);
    localStorage.setItem("message_to_onereach", this.checkoutForm.value.query)
    this.router.navigate(['/chat-rm']);
    this.checkoutForm.reset();
  }


}
