import { ParticipantModel } from './../../models/participant.models';
import { UserService } from 'src/app/services/user.service';
import { ParticipantService } from './../../services/participant.service';
import { Router } from '@angular/router';
import { AddbikerideService } from 'src/app/services/addbikeride.service';
import { BikerideModel } from '../../models/bikeride.models';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bikeride-list',
  templateUrl: './bikeride-list.component.html',
  styleUrls: ['./bikeride-list.component.scss']
})
export class BikerideListComponent implements OnInit {
  bikerides: BikerideModel[];
  participants: ParticipantModel[];
  numberMaxParticipants: any;
  participant: ParticipantModel;

  constructor(
    private addbikerideService: AddbikerideService,
    private participantService: ParticipantService,
    private userService: UserService,
    private router: Router,
  ) { }


  ngOnInit(): void {
    this.addbikerideService.getBikerides()
      .subscribe(
        (data: BikerideModel[]) => this.bikerides = data
      );
  }

}