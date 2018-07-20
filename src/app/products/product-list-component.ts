import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';
import {IProduct} from './product';

@Component({
    // selector: 'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
    pageTitle: string = 'Product List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    _listFilter: string;
    errorMessage: string;

    public get listFilter(): string {
      return this._listFilter;
    }
    public set listFilter(value: string) {
      this._listFilter = value;
      this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
    }

    filteredProducts: IProduct[];
    products: IProduct[];

      constructor(private productService: ProductService) {
          // do nothing for now
      }

      onRatingClicked(message: string): void {
        this.pageTitle = message;
      }
      performFilter( filterBy: string): IProduct[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product: IProduct) =>
            product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
      }
      toggleImage(): void {
          this.showImage = !this.showImage;
      }
      ngOnInit(): void {
        console.log('In OnInit');

        // Set the product property (this.products) to the array of products
        // that is retrieved from subscribe()
        // Cast the error returned to the 'any' data-type
        this.productService.getProducts().subscribe(
          products => {
            this.products = products;
            this.filteredProducts = this.products;
          },
          error => this.errorMessage = <any>error
        );

      }
}
