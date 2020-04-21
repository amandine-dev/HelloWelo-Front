import { Component, OnInit } from '@angular/core';
import { BikerideModel } from 'src/app/models/bikeride.models';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ParticipantService } from 'src/app/services/participant.service';
import { ParticipantModel } from 'src/app/models/participant.model';

@Component({
  selector: 'app-organiser-list',
  templateUrl: './organiser-list.component.html',
  styleUrls: ['./organiser-list.component.scss']
})
export class OrganiserListComponent implements OnInit {
  
  bikeRides: Array<any> = [];
  participants: ParticipantModel[];
  userId: number;
  bikeRideId: number;

  constructor(
    private authService: AuthService,
    private participantService: ParticipantService,
    private router: Router,
  ) { }


  ngOnInit(): void {
    if (this.authService.user) {
      this.userId = this.authService.user.id;
      console.log(this.userId);
    }

    this.participantService.getBikeRidesByParticipant(this.userId)
      .subscribe(
        data => {
          // this.bikeRides = data.BikeRides;
          // console.log(this.bikeRides);
          data.BikeRides.forEach(e => {
            if (e.Participant.isOrganiser == true) {
              this.bikeRides.push(e);
            }
          });
          console.log(this.bikeRides);
        }
      );
  }

}
