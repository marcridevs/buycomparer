import { Component, OnInit } from '@angular/core';
import { ProductComponent } from '../product/product.component';
import { PRODUCTS } from '../mock-products';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  listItems = PRODUCTS;

  constructor() { }

  ngOnInit(): void {
    
  }

}
