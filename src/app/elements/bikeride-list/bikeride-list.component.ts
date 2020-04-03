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

  // addParticipant(participants: ParticipantModel[]) {
  //   alert("Vous êtes bien inscrits")

  //   if (this.participants.length <= this.numberMaxParticipants) {

  //     // this.participant = (this.userService.getUser(id));

  //     this.participantService.addParticipant(this.participant)
  //       .subscribe(
  //         (data: ParticipantModel[]) => this.bikerides = data
  //       );

  //   } else {
  //     alert("il n'y a plus de places")
  //   }
  // }

  // onClick(): void {
  //     let numberparticipants = this.participants.length;

  //     this.addbikerideService.saveBikeride(bikeride)
  //       .subscribe(
  //         (data: BikerideModel) => {
  //           this.router.navigate(['/les-sorties']);
  //         },
  //         (err: Error) => console.log(err),
  //         () => console.log('Request completed')
  //       );
  //     console.log(this.form.value);
  // }
  
}