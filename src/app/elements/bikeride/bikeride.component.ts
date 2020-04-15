import { Component, OnInit } from '@angular/core';
import { BikerideModel } from 'src/app/models/bikeride.models';
import { AddbikerideService } from 'src/app/services/addbikeride.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ParticipantService } from 'src/app/services/participant.service';
import { ParticipantModel } from 'src/app/models/participant.model';
import { log } from 'util';

@Component({
  selector: 'app-bikeride',
  templateUrl: './bikeride.component.html',
  styleUrls: ['./bikeride.component.scss']
})
export class BikerideComponent implements OnInit {

  bikeride: BikerideModel;
  cityName: string = '';
  organiserName: string = '';

  isLoadingResults = false;

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
    private route: ActivatedRoute,
    private addbikeride: AddbikerideService,
    private authService: AuthService,
    private participantService: ParticipantService,
    private router: Router
  ) { }

  ngOnInit() {
    console.log(this.route.snapshot.params['id']);
    this.getBikeride(this.route.snapshot.params['id']);

    if (this.authService.user) {
      this.UserId = this.authService.user.id;
      console.log(this.UserId);
    }
  }

  getBikeride(id) {
    this.addbikeride.getBikeride(id)
      .subscribe(data => {
        this.bikeride = data;
        console.log(this.bikeride);
        this.cityName = data.City.name;
        data.Users.forEach(user => {
          if (user.Participant.isOrganiser == true) {
            this.organiserName = user.firstName;
            console.log(this.organiserName);
          }
        });
        this.isLoadingResults = true;
      });
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
