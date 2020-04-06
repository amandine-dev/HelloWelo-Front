import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AddbikerideService } from 'src/app/services/addbikeride.service';
import { BikerideModel } from 'src/app/models/bikeride.models';

@Component({
  selector: 'app-user-bikeride-list',
  templateUrl: './user-bikeride-list.component.html',
  styleUrls: ['./user-bikeride-list.component.scss']
})
export class UserBikerideListComponent implements OnInit {
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
