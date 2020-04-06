import { LevelService } from './../../services/level.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { AddbikerideService } from 'src/app/services/addbikeride.service';
import { BikerideModel } from 'src/app/models/bikeride.models'
import { CscService } from 'src/app/services/csc.service';
import { isNgTemplate } from '@angular/compiler';
import { AuthService } from 'src/app/services/auth.service';
import { ParticipantService } from 'src/app/services/participant.service';
import { ParticipantModel } from 'src/app/models/participant.model';

@Component({
  selector: 'app-add-bikeride',
  templateUrl: './add-bikeride.component.html',
  styleUrls: ['./add-bikeride.component.scss']
})
export class AddBikerideComponent implements OnInit {
  form: FormGroup;

  countries = [];
  states = [];
  cities = [];
  bikeRides = [];
  levels = [];
  types = [];

  // user id
  UserId: number;
  organiserParticipant: ParticipantModel;
  bikeRideId: number;

  constructor(
    private formBuilder: FormBuilder,
    private addbikerideService: AddbikerideService,
    private router: Router,
    private cscService: CscService,
    private levelService: LevelService,
    private authService: AuthService,
    private participantService: ParticipantService
  ) { }


  ngOnInit(): void {
    this.getCountries();
    this.getLevels();

    this.form = this.formBuilder.group({
      title: new FormControl(''),
      date: new FormControl(''),
      time: new FormControl(''),
      numberKm: new FormControl(''),
      description: new FormControl(''),
      meetingPoint: new FormControl(''),
      itinerary: new FormControl(''),
      numberMaxParticipants: new FormControl(''),
      numberParticipants: new FormControl(''),
      // RideTypeId: new FormControl(''),
      RideLevelId: new FormControl(''),
      RideStatusId: new FormControl(''),
      CountryId: new FormControl(''),
      StateId: new FormControl(''),
      CityId: new FormControl('')
    });

    this.UserId = this.authService.user.id;
    console.log(this.UserId);
  }

  getCountries() {
    this.cscService.getCountries()
      .subscribe(data => {
        this.countries = data;
      });
  }

  getLevels() {
    this.levelService.getLevels()
      .subscribe(data => {
        this.levels = data;
      });
  }

  onChangeCountry(countryId: number) {
    if (countryId) {
      this.cscService.getStates(countryId).subscribe(
        data => {
          this.states = data;
          this.cities = null;
        }
      );
    } else {
      this.states = null;
      this.cities = null;
    }
  }

  onChangeState(stateId: number) {
    if (stateId) {
      this.cscService.getCities(stateId).subscribe(
        data => {
          this.cities = data;
        });
    } else {
      this.cities = null;
    }
  }


  onSubmit(): void {
    if (this.form.valid) {
      const bikeride = this.form.value as BikerideModel;

      this.form.value.RideStatusId = 1;
      this.form.value.numberParticipants = 1;

      // add bike ride to BikeRides table
      this.addbikerideService.saveBikeride(bikeride)
        .subscribe(
          (data: BikerideModel) => {
            this.bikeRideId = data.id;
            this.router.navigate(['/balade', data.id]);
          },
          (err: Error) => console.log(err),
          () => console.log('Request completed')
        );
      console.log(this.form.value);
    }
  }

  // add bike ride organiser to Participants table
  // addOrganiser(organiserParticipant) {
  //   console.log("hey");

  //   this.organiserParticipant.isOrganiser = true;
  //   this.organiserParticipant.BikeRideId = this.bikeRideId;
  //   this.organiserParticipant.UserId = this.UserId;
  
  //   console.log(this.organiserParticipant);

  //   this.participantService.addParticipant(organiserParticipant)
  //     .subscribe(
  //       (data: ParticipantModel) => {
  //         console.log(data);
  //       },
  //       (err: Error) => console.log(err),
  //       () => console.log('Request completed')
  //     );
  // }

}
