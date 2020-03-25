import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { AddbikerideService } from 'src/app/services/addbikeride.service';
import { BikerideModel } from 'src/app/models/bikeride.models'

@Component({
  selector: 'app-add-bikeride',
  templateUrl: './add-bikeride.component.html',
  styleUrls: ['./add-bikeride.component.scss']
})
export class AddBikerideComponent implements OnInit {
  form: FormGroup;
  //à retirer et remplacer par services - bdd //
  bikerides = [];
  cities = [];
  levels = [];
  types = []
  


  constructor(
    private formBuilder: FormBuilder,
    private addbikerideService: AddbikerideService,
    private router: Router
  ) { }

  
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      title: new FormControl(''),
      date: new FormControl (''),
      time: new FormControl (''),
      numberkm: new FormControl (''),
      description: new FormControl (''),
      cityId: new FormArray ([]),
      meetingpoint: new FormControl (''),
      numberMaxParticipants: new FormControl (''),
      rideTypeId: new FormArray ([]),
      rideLevelId: new FormArray ([]),
      rideStatusId: new FormArray ([]),
    });
  }



  onSubmit(): void {
    if (this.form.valid) {
      const bikeride = this.form.value as BikerideModel;

      this.addbikerideService.saveBikerides(bikeride)
        .subscribe(
          (data: BikerideModel) => {
            this.router.navigate(['/bikerides']);
          },
          (err: Error) => console.log(err),
          () => console.log('Request has completed')
        );
      console.log(this.form.value);
    }
  }

 //onChange() 
 //{
 //alert('pour les country, state, city onChange pour changer les states en fonction du pays choisit');
 //}
}
