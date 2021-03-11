import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { NavTitleServiceService } from '../services/nav-title-service.service';
import { RestClientService } from '../services/rest-client.service';
import { ListItem } from '../interfaces/listItem';
import { Product } from '../interfaces/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  public products: Product[] = [];
  public listItemProducts: ListItem[] = [];

  constructor(
    private restClient: RestClientService,
    private titleService: Title,
    private navTitleService: NavTitleServiceService
  ) {
    this.titleService.setTitle('List of products'); //Change the tab of the browser
    this.navTitleService.changeTitle.emit('List of products'); //Change the navbar title
  }

  ngOnInit(): void {
    this.loadProductList();
  }

  public loadProductList() {
    this.restClient.getProducts().subscribe((listProducts: Product[]) => {
      this.products = listProducts;

      listProducts.forEach((product) => {
        this.listItemProducts.push({
          name: product.name,
          description: product.description,
          img: product.img_product,
        });
      });
    });
  }
}
