// Angular Framework Imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

// Project Imports
import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductModule } from './products/product.module';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'page-not-found', component: PageNotFoundComponent },
      // { path: 'welcome', component: WelcomeComponent},
      // { path: '', redirectTo: 'welcome', pathMatch: 'full'},
      { path: '', component: WelcomeComponent },
      { path: '**', redirectTo: 'page-not-found', pathMatch: 'full' },
    ], { useHash: false }),
    ProductModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
