import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'pm-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {

  pageTitle: string = 'Page Not Found';
  constructor(private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
  }
  onHome() {
    this.router.navigate(['/']);
  }

}
