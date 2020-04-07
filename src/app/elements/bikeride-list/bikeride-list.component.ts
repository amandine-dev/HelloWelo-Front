import { Router } from '@angular/router';
import { AddbikerideService } from 'src/app/services/addbikeride.service';
import { BikerideModel } from '../../models/bikeride.models';
import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/models/user.models';
import { AuthService } from 'src/app/services/auth.service';
import { ParticipantModel } from 'src/app/models/participant.model';
import { ParticipantService } from 'src/app/services/participant.service';
@Component({
  selector: 'app-bikeride-list',
  templateUrl: './bikeride-list.component.html',
  styleUrls: ['./bikeride-list.component.scss']
})
export class BikerideListComponent implements OnInit {
  // list of bike rides
  bikerides: BikerideModel[];
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
    private addbikerideService: AddbikerideService,
    private authService: AuthService,
    private router: Router,
    private participantService: ParticipantService
  ) { }

  ngOnInit(): void {
    this.addbikerideService.getBikerides()
      .subscribe(
        (data: BikerideModel[]) => {
          this.bikerides = data;
          console.log(this.bikerides);
        }
      );
    this.UserId = this.authService.user.id;
    console.log(this.UserId);
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