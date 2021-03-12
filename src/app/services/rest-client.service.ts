import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class RestClientService {

  private serverApi = "http://localhost:8000/api/";

  constructor(private http : HttpClient) { }

  public getProducts() {
    return this.http.get<Product[]>(this.serverApi + "product/all");
  }

  public getProduct(id : string) {
    return this.http.get<Product>(this.serverApi + "product/" + id);
  }
}
