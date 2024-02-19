import { Component } from '@angular/core';
import { Router,NavigationEnd } from '@angular/router';
import { MainsrviceService } from 'src/app/services/mainsrvice.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  showElement: any;

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.showElement = this.router.url === '/dashboard';
      }
    });
  }
  
  getHeaderStyles():any{
    const url = this.router.url;
    const styles: string[] = [];

    if (url.includes('/dashboard')) {
      styles.push('dashboard-header');
    }

    if (url.includes('/mainpage')) {
      styles.push('mainpage-header');
    }
  }

}
