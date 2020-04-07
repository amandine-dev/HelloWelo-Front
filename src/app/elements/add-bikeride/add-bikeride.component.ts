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
  submitted = false;

  countries = [];
  states = [];
  cities = [];
  bikeRides = [];
  levels = [];
  types = [];

  // user id
  UserId: number;
  organiserParticipant: ParticipantModel = new ParticipantModel();
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
      title: new FormControl('', [Validators.required, Validators.minLength(4)]),
      date: new FormControl ('selectedDate',[Validators.required]),
      time: new FormControl ('',[Validators.required]),
      numberKm: new FormControl(''),
      description: new FormControl ('', [Validators.required, Validators.maxLength(2000)]),
      meetingPoint: new FormControl ('',[Validators.required]),
      itinerary: new FormControl(''),
      numberMaxParticipants: new FormControl ('',[Validators.required, Validators.min(1), Validators.max(40)]),
      numberParticipants: new FormControl(''),
      // RideTypeId: new FormControl(''),
      RideLevelId: new FormControl('', [Validators.required]),
      RideStatusId: new FormControl(''),
      CountryId: new FormControl('', [Validators.required]),
      StateId: new FormControl('', [Validators.required]),
      CityId: new FormControl('', [Validators.required]),
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

  get f() { return this.form.controls; }


  onSubmit(): void {
    this.submitted = true;

    if (this.form.valid) {
      const bikeride = this.form.value as BikerideModel;

      this.form.value.RideStatusId = 1;
      this.form.value.numberParticipants = 0;

      // add bike ride to BikeRides table
      this.addbikerideService.saveBikeride(bikeride)
        .subscribe(
          (data: BikerideModel) => {
            this.bikeRideId = data.id;
            
            this.organiserParticipant.isOrganiser = true;
            this.organiserParticipant.BikeRideId = this.bikeRideId;
            this.organiserParticipant.UserId = this.UserId;
            console.log(this.organiserParticipant);
            this.addOrganiser(this.organiserParticipant);

            this.router.navigate(['/balade', data.id]);
          },
          (err: Error) => console.log(err),
          () => console.log('Request completed')
        );
      console.log(this.form.value);
    }
  }


  //add bike ride organiser to Participants table
  addOrganiser(organiserParticipant) {
    this.participantService.addParticipant(organiserParticipant)
      .subscribe(
        (data: ParticipantModel) => {
          console.log(data);
        },
        (err: Error) => console.log(err),
        () => console.log('Request completed')
      );
  }

}


