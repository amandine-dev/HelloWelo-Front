import { CityService } from 'src/app/services/city.service';
import { Component, OnInit } from '@angular/core';
import { AddbikerideService } from 'src/app/services/addbikeride.service';
import { LevelService } from 'src/app/services/level.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CityModel } from 'src/app/models/city.models';
import { LevelModel } from 'src/app/models/level.models';
import { BikerideModel } from 'src/app/models/bikeride.models';

@Component({
  selector: 'app-bikeride',
  templateUrl: './bikeride.component.html',
  styleUrls: ['./bikeride.component.scss']
})
export class BikerideComponent implements OnInit {
  
  bikeride: BikerideModel []
  
  isLoadingResults = true;

  constructor(
    private route: ActivatedRoute, 
    private addbikeride: AddbikerideService, 
    private router: Router) { }

  ngOnInit() {
    console.log(this.route.snapshot.params['id']);
    this.getBikeride(this.route.snapshot.params['id']);
  }

  getBikeride(id) {
    this.addbikeride.getBikeride(id)
      .subscribe(data => {
        this.bikeride = data;
        console.log(this.bikeride);
        this.isLoadingResults = false;
      });
  }


}