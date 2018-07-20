import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ProductService } from './product.service';
import { IProduct } from './product';


@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle: string = 'Product Detail';
  product: IProduct;
  products: IProduct[];
  errorMessage: string;

  constructor(private route: ActivatedRoute,
              private router: Router,
            private productService: ProductService) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.pageTitle += `: ${id}`;

    console.log('In OnInit');

        // Set the product property (this.products) to the array of products
        // that is retrieved from subscribe()
        // Cast the error returned to the 'any' data-type
        this.productService.getProducts().subscribe(
          products => {
            this.products = products;
            this.product = products.find(p => p.productId === id);
          },
          error => this.errorMessage = <any>error
        );
  }

  onBack() {
    this.router.navigate(['/products']);
  }
}
