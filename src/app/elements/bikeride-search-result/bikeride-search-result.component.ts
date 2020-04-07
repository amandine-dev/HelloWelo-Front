import { Component, OnInit } from '@angular/core';
import { BikerideModel } from 'src/app/models/bikeride.models';
import { SearchBikerideService } from 'src/app/services/search-bikeride.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CityService } from 'src/app/services/city.service';
import { AddbikerideService } from 'src/app/services/addbikeride.service';
import { ParticipantModel } from 'src/app/models/participant.model';
import { ParticipantService } from 'src/app/services/participant.service';
import { AuthService } from 'src/app/services/auth.service';

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

  // bike ride selected by the participant
  selectedBikeRide: BikerideModel;
  bikeRideId: number;
  numberMaxParticipants: number;
  numberParticipants: number;

  // user id
  UserId: number;

  // new participant to be added to bike ride participants list
  newParticipant: ParticipantModel = new ParticipantModel();

  constructor(
    private searchBikerideService: SearchBikerideService,
    private participantService: ParticipantService,
    private authService: AuthService,
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

    if(this.authService.user) {
      this.UserId = this.authService.user.id;
      console.log(this.UserId);
    }
  }

  setSelectedBikeRide(selectedBikeRide: BikerideModel) {
    this.selectedBikeRide = selectedBikeRide;
    console.log(selectedBikeRide);

    this.bikeRideId = selectedBikeRide.id;
    console.log(this.bikeRideId);

    this.numberParticipants = selectedBikeRide.numberParticipants;
    console.log(this.numberParticipants);

    this.numberMaxParticipants = selectedBikeRide.numberMaxParticipants;
    console.log(this.numberMaxParticipants);

    this.setNewParticipant(this.bikeRideId, this.UserId);
    this.addParticipant(this.newParticipant);
  }


  setNewParticipant(bikRideId, userId) {
    this.newParticipant.BikeRideId = bikRideId;
    this.newParticipant.UserId = userId;
    console.log(this.newParticipant);
  }

  addParticipant(participant: ParticipantModel) {
    if (this.numberParticipants <= this.numberMaxParticipants) {
      this.participantService.addParticipant(participant)
        .subscribe(data => {
          console.log(data);
          this.router.navigate(['/mon-espace']);
        },
          (err: Error) => console.log(err),
          () => console.log('Request completed')
        );
    } else {
      console.log("Full bike ride");
    }
  }

}
