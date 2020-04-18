import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-nav-onglet',
  templateUrl: './nav-onglet.component.html',
  styleUrls: ['./nav-onglet.component.scss']
})
export class NavOngletComponent  {
  title = 'Angular Nav Tabs';
  activeTab: number;
  type: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) {
    this.route.params
      .subscribe(params => this.type = params.type);
  }

  ngOnInit(): void {
    console.log(this.type);

    switch (this.type) {
      case 'profil':
        this.clickTab(1);
        break;
      case 'participant':
        this.clickTab(2);
        break;
      case 'organisateur':
        this.clickTab(3);
        break;
      default:
        
        break;
    }

  }

  clickTab(tabNumber) {
    this.activeTab = tabNumber;
  }
}

  
