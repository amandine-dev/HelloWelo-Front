import { ParticipantModel } from 'src/app/models/participant.model';
import { ParticipantService } from 'src/app/services/participant.service';
import { AuthService } from 'src/app/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AddbikerideService } from 'src/app/services/addbikeride.service';
import { BikerideModel } from 'src/app/models/bikeride.models';
import { data } from 'jquery';

@Component({
  selector: 'app-user-bikeride-list',
  templateUrl: './user-bikeride-list.component.html',
  styleUrls: ['./user-bikeride-list.component.scss']
})
export class UserBikerideListComponent implements OnInit {

  bikerides: [];
  participants: ParticipantModel[];
  userId: number;
  bikerideId: number;

  constructor(
    private addbikerideService: AddbikerideService,
    private router: Router,
    private authService: AuthService,
    private participantService: ParticipantService
  ) { }


  ngOnInit(): void {

    if (this.authService.user) {
      this.userId = this.authService.user.id;
      console.log(this.userId);
    }

    this.participantService.getBikerideByParticipant(this.userId)
      .subscribe(
        data => {
          this.bikerides = data.BikeRides;
          console.log(this.bikerides);
        }
      );
  }

  deleteParticipant(bikeRideId) {
    console.log(bikeRideId);
    this.participantService.deleteParticipant(bikeRideId, this.userId)
      .subscribe(
        data => {
          console.log(data);
          this.router.navigate(['/mon-espace']);
        }
      )
  }

}
