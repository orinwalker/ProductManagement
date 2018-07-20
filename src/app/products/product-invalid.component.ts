import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'pm-product-invalid',
  templateUrl: './product-invalid.component.html',
  styleUrls: ['./product-invalid.component.css']
})
export class ProductInvalidComponent implements OnInit {
  pageTitle: string = 'Invalid Product';
  constructor(private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
  }
  onBack() {
    this.router.navigate(['/products']);
  }
}
