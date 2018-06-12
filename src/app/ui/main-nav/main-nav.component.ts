import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent {

  show = false;
  router;
  constructor(private _router: Router) {
    this.router = _router;
  }

  toggleCollapse() {
    this.show = !this.show;
  }

}
