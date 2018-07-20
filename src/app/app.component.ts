
import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  // Note: I moved the template out of here to the templateUrl file
  // template: `
  //   <div><h1>{{pageTitle}}</h1>
  //     <pm-products></pm-products>
  //   </div>`,
  templateUrl: './app.component.html',
})
export class AppComponent {
  pageTitle: string = 'Product Management Utility';
}

// @Component({
//   selector: 'pm-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'Angular: Getting Started';
// }
