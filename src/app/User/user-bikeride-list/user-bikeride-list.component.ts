import { UserService } from 'src/app/services/user.service';
import { ParticipantModel } from 'src/app/models/participant.model';
import { ParticipantService } from 'src/app/services/participant.service';
import { AuthService } from 'src/app/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BikerideModel } from 'src/app/models/bikeride.models';
import { data } from 'jquery';
import { UserModel } from 'src/app/models/user.models';

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
    private router: Router,
    private authService: AuthService,
    private participantService: ParticipantService,
    public userService: UserService,
  ) { }


  ngOnInit(): void {

    this.userId = this.authService.user.id;
    console.log(this.userId);

    this.participantService.getBikerideByParticipant(this.userId)
      .subscribe(
        (data: BikerideModel[]) => {
          this.bikerides = data;
          console.log(this.bikerides);
        }
      );
  }

}
