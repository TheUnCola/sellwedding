import { Component } from '@angular/core';
import { AuthService } from './core/auth.service';
import { Router, NavigationEnd } from '@angular/router';
import { DataSharingService } from './services/data-sharing.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [DataSharingService]
})
export class AppComponent {
  title = 'app';
  isLandingPage: boolean;
  router;
  constructor(private auth: AuthService, private _router: Router) {
    this.router = _router.url;

    _router.events.subscribe((val) => {
      if (val instanceof NavigationEnd === true && _router.url !== '/') {
        this.isLandingPage = false;
      } else if (val instanceof NavigationEnd === true && _router.url === '/') {
        this.isLandingPage = true;
      }
    });
  }
}
