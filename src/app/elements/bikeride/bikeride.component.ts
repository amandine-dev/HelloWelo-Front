import { Component, OnInit } from '@angular/core';
import { BikerideModel } from 'src/app/models/bikeride.models';
import { AddbikerideService } from 'src/app/services/addbikeride.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CityService } from 'src/app/services/city.service';
import { CityModel } from 'src/app/models/city.models';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-bikeride',
  templateUrl: './bikeride.component.html',
  styleUrls: ['./bikeride.component.scss']
})
export class BikerideComponent implements OnInit {
  
  bikeride: BikerideModel;
  cityName: string = '';
  
  isLoadingResults = false;

  constructor(
    private route: ActivatedRoute, 
    private addbikeride: AddbikerideService,
    private router: Router
  ) { }

  ngOnInit() {
    console.log(this.route.snapshot.params['id']);
    this.getBikeride(this.route.snapshot.params['id']);
    
  }

  getBikeride(id) {
    this.addbikeride.getBikeride(id)
      .subscribe(data => {
        this.bikeride = data;
        console.log(this.bikeride);
        this.cityName = data.City.name;
        this.isLoadingResults = true;
      });
  }

  
  
  





}
