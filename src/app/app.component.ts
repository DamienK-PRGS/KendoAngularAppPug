import { Component, computed, inject, signal } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { KENDO_NAVIGATION } from '@progress/kendo-angular-navigation';
import { CommonModule } from '@angular/common';
import { KENDO_LAYOUT } from '@progress/kendo-angular-layout';
import { KENDO_LOADER } from '@progress/kendo-angular-indicators';
import { homeIcon, SVGIcon } from "@progress/kendo-svg-icons";
import { KENDO_ICONS } from '@progress/kendo-angular-icons';
import { filter, map } from 'rxjs';



@Component({
  selector: 'app-root',
  imports: [RouterOutlet,KENDO_NAVIGATION, KENDO_ICONS, CommonModule, KENDO_LAYOUT, KENDO_LOADER, RouterLink, RouterLinkActive],
  styleUrl: './app.component.css',
  providers: [],
  template: `
    <nav  class="top-nav">
      <ul class="nav">
        <li class="nav"><a routerLink="/home" routerLinkActive="active"><kendo-svg-icon [icon]="homeSvg"></kendo-svg-icon></a></li>
        <li class="nav"><a routerLink="/customers" routerLinkActive="active">Customers</a></li>
        <li class="nav"><a routerLink="/employees" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }">Employees</a></li>
      </ul>
      <kendo-avatar
        [border]="true"
        fillMode="solid"
        initials="DK"
      ></kendo-avatar>
    </nav>
    <div class="main-content">
      <router-outlet></router-outlet>
    </div>
  `
})

export class AppComponent {
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private titleSignal = signal<string>(''); // initial
  public title = "Home"

  constructor() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => {
        let currentRoute = this.route;0        
        while (currentRoute.firstChild) {
          currentRoute = currentRoute.firstChild;
        }        
        return currentRoute.snapshot.data['title'] || '';
      })
    ).subscribe(title => this.titleSignal.set(title));
  }

  pageTitle = computed(() => this.titleSignal());

  public homeSvg: SVGIcon = homeIcon;
}
