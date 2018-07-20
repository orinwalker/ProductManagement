import { NgModule } from '@angular/core';
import { ProductListComponent } from './product-list-component';
import { ProductDetailComponent } from './product-detail.component';
import { ProductInvalidComponent } from './product-invalid.component';
import { ConvertToSpacesPipe } from '../shared/convert-to-spaces.pipe';
import { RouterModule } from '../../../node_modules/@angular/router';
import { ProductDetailGuard } from './product-detail.guard';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'products', component: ProductListComponent },
      {
        path: 'products/:id',
        canActivate: [ProductDetailGuard],
        component: ProductDetailComponent
      },
      { path: 'invalid-product', component: ProductInvalidComponent },
    ]),
    SharedModule
  ],
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ProductInvalidComponent,
    ConvertToSpacesPipe,
  ]
})
export class ProductModule { }
