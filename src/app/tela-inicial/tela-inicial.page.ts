import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tela-inicial',
  templateUrl: './tela-inicial.page.html',
  styleUrls: ['./tela-inicial.page.scss'],
})
export class TelaInicialPage implements OnInit {
 
  constructor(public router:Router) {
    setTimeout(()=>{
      this.router.navigateByUrl('splash');
    },1500);
  }

  ngOnInit() {

  }
}
