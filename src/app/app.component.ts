import { Component } from '@angular/core';
import { AuthService } from './core/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  router;
  constructor(private auth: AuthService, private _router: Router) {
    this.router = _router.url;
    // console.log(this.router);
  }
}
