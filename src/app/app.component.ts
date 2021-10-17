import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'my-app';
  selected:string = 'home';


  constructor(
    public router: Router,
  ){}

  ngOnInit(){
    this.goToRoute('home'); // just so that on first load it loads home component
  }

  goToRoute(route:string){
    this.selected = route;
    if(route == 'abi'){
      this.router.navigate(['/abi-ai']);
    }
    if(route == 'home'){
      this.router.navigate(['/home']);
    }
    
  }
}
