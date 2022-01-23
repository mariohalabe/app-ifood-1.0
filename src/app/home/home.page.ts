import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage{

  
  categories = [
  'Restaurantes',
  'Mercados',
  'Bebidas',
  'Farmácia', 
  'Express'];

  constructor() { }

  onCategoryChange(category) {
    console.log(category.detail.value);}
  
  

}
