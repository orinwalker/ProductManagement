// Angular Framework Imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

// Project Imports
import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list-component';
import { ConvertToSpacesPipe } from './shared/convert-to-spaces.pipe';
import { StarComponent } from './shared/star.component';
import { ProductDetailComponent } from './products/product-detail.component';
import { WelcomeComponent } from './home/welcome.component';
import { ProductDetailGuard } from './products/product-detail.guard';
import { ProductInvalidComponent } from './products/product-invalid.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ConvertToSpacesPipe,
    StarComponent,
    ProductDetailComponent,
    WelcomeComponent,
    ProductInvalidComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'products', component: ProductListComponent },
      {
        path: 'products/:id',
        canActivate: [ProductDetailGuard],
        component: ProductDetailComponent
      },
      { path: 'invalid-product', component: ProductInvalidComponent },
      { path: 'page-not-found', component: PageNotFoundComponent },
      // { path: 'welcome', component: WelcomeComponent},
      // { path: '', redirectTo: 'welcome', pathMatch: 'full'},
      { path: '', component: WelcomeComponent },
      { path: '**', redirectTo: 'page-not-found', pathMatch: 'full' },
    ], { useHash: false })
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
