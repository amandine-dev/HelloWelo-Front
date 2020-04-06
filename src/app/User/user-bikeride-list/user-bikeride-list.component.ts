import { ParticipantModel } from 'src/app/models/participant.model';
import { ParticipantService } from 'src/app/services/participant.service';
import { AuthService } from 'src/app/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AddbikerideService } from 'src/app/services/addbikeride.service';
import { BikerideModel } from 'src/app/models/bikeride.models';

@Component({
  selector: 'app-user-bikeride-list',
  templateUrl: './user-bikeride-list.component.html',
  styleUrls: ['./user-bikeride-list.component.scss']
})
export class UserBikerideListComponent implements OnInit {

  bikerides: BikerideModel[];
  participants: ParticipantModel[];
  userId: number;

  constructor(
    private addbikerideService: AddbikerideService,
    private router: Router,
    private authService: AuthService,
    private participantService: ParticipantService
  ) { }


  ngOnInit(): void {
    // this.addbikerideService.getBikerides()
    //   .subscribe(
    //     (data: BikerideModel[]) => this.bikerides = data
    //   );

    this.userId = this.authService.user.id;
    console.log(this.userId);
  

    this.participantService.getBikerideByParticipant(this.userId)
      .subscribe(
        (data: ParticipantModel[]) => {
          this.participants = data.filter(data => data.UserId === this.userId)
        }
      );
  }

}
