import { Component, OnInit } from '@angular/core';
import { DATA, HEADERS } from './app.constants';

/**
 * interface for products
 */
export interface Product {
  id?: string;
  code?: string;
  name?: string;
  description?: string;
  price?: number;
  quantity?: number;
  inventoryStatus?: string;
  category?: string;
  image?: string;
  rating?: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  /**
   * store the tile of the page
   *
   * @memberof AppComponent
   */
  title = 'my-first-project';
  /**
   * store the product data
   *
   * @type {(Product[])}
   * @memberof AppComponent
   */
  products: Product[] = [];
  /**
   * stores the columns
   * 
   * @type {(any[])}
   * @memberof AppComponent
   */
  cols: any[] = [];
  
  ngOnInit(): void {
    this.cols = HEADERS;
    this.products = DATA.data;
  }
}
