import { Component, OnInit } from '@angular/core';
import { BikerideModel } from 'src/app/models/bikeride.models';
import { SearchBikerideService } from 'src/app/services/search-bikeride.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CityService } from 'src/app/services/city.service';
import { AddbikerideService } from 'src/app/services/addbikeride.service';

@Component({
  selector: 'app-bikeride-search-result',
  templateUrl: './bikeride-search-result.component.html',
  styleUrls: ['./bikeride-search-result.component.scss']
})
export class BikerideSearchResultComponent implements OnInit {
  bikerides: BikerideModel[];
  bikeRidesByCityResult: any;
  bikeRidesByStateResult: any;
  bikeRidesByDateResult: any;

  type: string;

  constructor(
    private searchBikerideService: SearchBikerideService,
    private cityService: CityService,
    private router: Router,
    private route: ActivatedRoute,
    private addbikerideService: AddbikerideService
  ) {
    this.route.params
      .subscribe(params => this.type = params.type);
  }

  ngOnInit(): void {
    console.log(this.type);

    switch (this.type) {
      case 'city':
        this.bikerides = this.searchBikerideService.getBikeRidesByCityResult();
        console.log(this.bikerides);
        break;
      case 'state':
        this.bikerides = this.searchBikerideService.getBikeRidesByStateResult();
        console.log(this.bikerides);
        break;
      case 'date':
        this.bikerides = this.searchBikerideService.getBikeRidesByDateResult();
        console.log(this.bikerides);
        break;
      default:
        this.addbikerideService.getBikerides()
        .subscribe(
          (data: BikerideModel[]) => this.bikerides = data
        );        
        break;
    }
  }

}
