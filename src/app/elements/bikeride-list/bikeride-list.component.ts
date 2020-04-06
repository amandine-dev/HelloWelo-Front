import { ParticipantModel } from './../../models/participant.model';
import { UserService } from 'src/app/services/user.service';
import { ParticipantService } from './../../services/participant.service';
import { Router } from '@angular/router';
import { AddbikerideService } from 'src/app/services/addbikeride.service';
import { BikerideModel } from '../../models/bikeride.models';
import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/models/user.models';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-bikeride-list',
  templateUrl: './bikeride-list.component.html',
  styleUrls: ['./bikeride-list.component.scss']
})
export class BikerideListComponent implements OnInit {
  // list of bike rides
  bikerides: BikerideModel[];
  participant: ParticipantModel;

  // bike ride selected by the participant
  selectedBikeRide: BikerideModel;
  bikeRideId: number;
  numberMaxParticipants: number;

  // user id
  UserId: number;

  // current participants list to selected bike ride
  participants: ParticipantModel[] = [];
  numberParticipants: any;
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
  }

  setSelectedBikeRide(selectedBikeRide: BikerideModel) {
    this.selectedBikeRide = selectedBikeRide;
    console.log(selectedBikeRide);

    this.bikeRideId = selectedBikeRide.id;
    console.log(this.bikeRideId);

    this.numberMaxParticipants = selectedBikeRide.numberMaxParticipants;
    console.log(this.numberMaxParticipants);

    this.getParticipantsList();
    this.setNewParticipant(this.bikeRideId, this.UserId);
    this.addParticipant(this.newParticipant);
  }

  getParticipantsList() {
    this.participantService.getParticipantsByBikeRide(this.bikeRideId)
      .subscribe(data => {
        this.participants = data;
        console.log(this.participants);
        this.numberParticipants = this.participants.length;
        console.log(this.numberParticipants);
      });
  }

  setNewParticipant(bikRideId, userId) {
    this.newParticipant.BikeRideId = bikRideId;
    this.newParticipant.UserId = userId;
    console.log(this.newParticipant);
  }

  addParticipant(participant: ParticipantModel) {
    console.log("hey");

    if (this.numberParticipants <= this.numberMaxParticipants) {
      this.participantService.addParticipant(participant)
        .subscribe(data => {
          console.log(data);
          this.router.navigate(['/mon-espace']);
        },
          (err: Error) => console.log(err),
          () => console.log('Request completed')
        );
    }
  }

}