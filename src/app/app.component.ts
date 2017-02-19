import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  products: any = [];
  showResults: Boolean = false;
  numberOfProducts = 2;

  ngOnInit() {
    this.initProducts(this.numberOfProducts);
  }

  initProducts(quantity) {
    this.products = [];
    for (let index = 0; index < quantity; index++) {
      this.products[index] = new Object();
    }
  }

  compare() {
    let index = 1;
    for (let product of this.products) {
      let value = product.price / (product.quantity * product.units);
      product.value = value;
      product.name = 'Option ' + index;
      index++;
    }
    this.showResults = true;
  }
}
