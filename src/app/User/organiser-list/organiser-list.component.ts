import { Component, OnInit } from '@angular/core';
import { BikerideModel } from 'src/app/models/bikeride.models';
import { Router } from '@angular/router';
import { AddbikerideService } from 'src/app/services/addbikeride.service';

@Component({
  selector: 'app-organiser-list',
  templateUrl: './organiser-list.component.html',
  styleUrls: ['./organiser-list.component.scss']
})
export class OrganiserListComponent implements OnInit {
  bikerides: BikerideModel[];

  constructor(
    private addbikerideService: AddbikerideService,
    private router: Router,
  ) { }
  

  ngOnInit(): void {
    this.addbikerideService.getBikerides()
    .subscribe(
      (data: BikerideModel[]) => this.bikerides = data
    );
  }

}
