import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-onglet',
  templateUrl: './nav-onglet.component.html',
  styleUrls: ['./nav-onglet.component.scss']
})
export class NavOngletComponent  {
  title = 'Angular Nav Tabs';
  activeTab = 1;

  clickTab(tabNumber) {
    this.activeTab = tabNumber;
  }
}

  
