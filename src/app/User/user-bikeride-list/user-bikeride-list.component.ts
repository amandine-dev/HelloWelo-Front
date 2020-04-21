import { ParticipantModel } from 'src/app/models/participant.model';
import { ParticipantService } from 'src/app/services/participant.service';
import { AuthService } from 'src/app/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BikerideModel } from 'src/app/models/bikeride.models';
import { data } from 'jquery';

@Component({
  selector: 'app-user-bikeride-list',
  templateUrl: './user-bikeride-list.component.html',
  styleUrls: ['./user-bikeride-list.component.scss']
})
export class UserBikerideListComponent implements OnInit {

  bikeRides: Array<any> = [];
  participants: ParticipantModel[];
  userId: number;

  constructor(
    private router: Router,
    private authService: AuthService,
    private participantService: ParticipantService
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
            if (e.Participant.isOrganiser == null) {
              this.bikeRides.push(e);
            }
          });
          console.log(this.bikeRides);
        }
      );
  }

  deleteParticipant(bikeRideId) {
    console.log(bikeRideId);
    if (confirm("Etes-vous sûr de vouloir vous désinscrire de cette sortie ?")) {
      this.participantService.deleteParticipant(bikeRideId, this.userId)
        .subscribe(
          data => {
            console.log(data);
            location.reload();
          }
        )
    }
  }

}
