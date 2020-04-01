import { Component, OnInit } from '@angular/core';
import { BikerideModel } from 'src/app/models/bikeride.models';
import { SearchBikerideService } from 'src/app/services/search-bikeride.service';
import { Router } from '@angular/router';
import { CityService } from 'src/app/services/city.service';

@Component({
  selector: 'app-bikeride-search-result',
  templateUrl: './bikeride-search-result.component.html',
  styleUrls: ['./bikeride-search-result.component.scss']
})
export class BikerideSearchResultComponent implements OnInit {
  bikerides: BikerideModel[];
  bikeRidesByCity: any;
  bikeRidesByState: any;
  bikeRidesByDate: any;

  // cityId:any;
  // city: any;

  constructor(
    private searchBikerideService: SearchBikerideService,
    private cityService: CityService,
    private router: Router
  ) { }

  ngOnInit(): void {

      this.bikerides = this.searchBikerideService.getBikeRidesByCityResult();
      console.log(this.bikerides);
      this.bikerides = this.searchBikerideService.getBikeRidesByStateResult();
      console.log(this.bikerides);
      this.bikerides = this.searchBikerideService.getBikeRidesByDateResult();
      console.log(this.bikerides);

    // this.cityId = this.bikerides[].cityId;
    // this.city = this.cityService.getCity(this.bikerides.CityId);
  }

}
