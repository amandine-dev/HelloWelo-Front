import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, FormArray } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AddbikerideService } from 'src/app/services/addbikeride.service';
import { BikerideModel } from 'src/app/models/bikeride.models'
import { CscService } from 'src/app/services/csc.service';
import { isNgTemplate } from '@angular/compiler';
import { AuthService } from 'src/app/services/auth.service';
import { ParticipantService } from 'src/app/services/participant.service';
import { ParticipantModel } from 'src/app/models/participant.model';
import { LevelService } from 'src/app/services/level.service';

@Component({
  selector: 'app-edit-bikeride',
  templateUrl: './edit-bikeride.component.html',
  styleUrls: ['./edit-bikeride.component.scss']
})
export class EditBikerideComponent implements OnInit {

  form: FormGroup;
  submitted = false;

  bikeRide: BikerideModel;
  cityName: string = '';
  organiserName: string = '';

  isLoadingResults = false;

  countries = [];
  states = [];
  cities = [];
  bikeRides = [];
  levels = [];
  types = [];

  // user id
  UserId: number;
  bikeRideId: number;

  constructor(
    private formBuilder: FormBuilder,
    private addbikerideService: AddbikerideService,
    private router: Router,
    private route: ActivatedRoute,
    private cscService: CscService,
    private levelService: LevelService,
    private authService: AuthService,
  ) { }


  ngOnInit(): void {
    this.bikeRideId = this.route.snapshot.params['id'];
    this.getBikeride(this.route.snapshot.params['id']);

    this.getCountries();
    this.getLevels();

    this.form = this.formBuilder.group({
      title: new FormControl('', [Validators.required, Validators.minLength(4)]),
      date: new FormControl('selectedDate', [Validators.required]),
      time: new FormControl('', [Validators.required]),
      numberKm: new FormControl(''),
      description: new FormControl('', [Validators.required, Validators.maxLength(2000)]),
      meetingPoint: new FormControl('', [Validators.required]),
      itinerary: new FormControl(''),
      numberMaxParticipants: new FormControl('', [Validators.required, Validators.min(1), Validators.max(40)]),
      numberParticipants: new FormControl(''),
      // RideTypeId: new FormControl(''),
      RideLevelId: new FormControl('', [Validators.required]),
      RideStatusId: new FormControl(''),
      CountryId: new FormControl('', [Validators.required]),
      StateId: new FormControl('', [Validators.required]),
      CityId: new FormControl('', [Validators.required]),
    });

    if (this.authService.user) {
      this.UserId = this.authService.user.id;
      console.log(this.UserId);
    }
  }

    getBikeride(id) {
      this.addbikerideService.getBikeride(id)
        .subscribe(data => {
          this.bikeRide = data;
          console.log(this.bikeRide);
          this.cityName = data.City.name;
          this.isLoadingResults = true;
        });
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

      if(this.form.valid) {
      const bikeRide = this.form.value as BikerideModel;

      // add bike ride to BikeRides table
      this.addbikerideService.editBikeride(this.bikeRideId, bikeRide)
        .subscribe(
          (data: BikerideModel) => {
            this.bikeRideId = data.id;

            this.router.navigate(['/balade', data.id]);
            // this.router.navigate(['/mon-espace', 'organisateur']);
          },
          (err: Error) => console.log(err),
          () => console.log('Request completed')
        );
      console.log(this.form.value);
    }
  }


}
