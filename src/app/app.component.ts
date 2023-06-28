import { Component } from '@angular/core';
import { Router, Event,  NavigationEnd } from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'angular-tour-of-heroes';
  currentRoute: string = ''
  constructor (public router: Router) {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
          this.currentRoute = event.url;
      }
  });
  }
  goToForm () {
    this.router.navigate(['/ng-form'])
  }
}
