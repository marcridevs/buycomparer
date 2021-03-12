import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListItem } from '../interfaces/listItem';
import { Product } from '../interfaces/product';
import { RestClientService } from '../services/rest-client.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  public product: Product;
  public productItem: ListItem;

  constructor(
    private restClient: RestClientService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      this.restClient
        .getProduct(param.get('id'))
        .subscribe((responseProduct) => {
          this.product = responseProduct;

          this.productItem = {
            id: this.product.id,
            name: this.product.name,
            description: this.product.description,
            img: this.product.img_product,
            detailRoute: null
          };
        });
    });
  }
}
