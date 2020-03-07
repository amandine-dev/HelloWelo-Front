import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AddbikerideService } from 'src/app/services/addbikeride.service';
import { BikerideModel } from 'src/app/models/bikeride.model'

@Component({
  selector: 'app-add-bikeride',
  templateUrl: './add-bikeride.component.html',
  styleUrls: ['./add-bikeride.component.scss']
})
export class AddBikerideComponent implements OnInit {
  form: FormGroup;
  //à retirer et remplacer par services - bdd //
  countries = [
    { id: 1, name: 'France' },
    { id: 2, name: 'Espagne' }
  ];
  states = [
    { id: 1, name: 'Nord' },
    { id: 2, name: 'Pas de Calais' }
  ];
  cities = [
    { id: 1, name: 'Lille' },
    { id: 2, name: 'Arras' }
  ];
  levels = [
    { id: 1, name: 'Tranquille, Emile' },
    { id: 2, name: 'Sport - tranquille' },
    { id: 3, name: 'Tour de France' }

  ];


  constructor(
    private formBuilder: FormBuilder,
    private addbikerideService: AddbikerideService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      title: ['', [Validators.required, Validators.maxLength(25)]],
      date: ['', [Validators.required, Validators.pattern('^([0-9]{4})(-[0-9]{2}){2}$')]],
      time: ['', [Validators.required, Validators.pattern('^[0-2][0-3]:[0-5][0-9]$')]],
      city: ['', [Validators.required]],
      state: ['', [Validators.required]],
      country: ['', [Validators.required]],
      meetingpoint: ['', [Validators.required, Validators.maxLength(50)]],
      km: ['', [Validators.required, Validators.min(1)]],
      description: ['', [Validators.required, Validators.maxLength(250)]],
      nbparticipants: ['', [Validators.required, Validators.min(1), Validators.max(40)]],
      level: ['', [Validators.required]],
    });
  }

  onSubmit(): void {

    if (this.form.valid) {
      const bikeride = this.form.value as BikerideModel;

      this.addbikerideService.save(bikeride)
        .subscribe(
          (data: BikerideModel) => {
            this.router.navigate(['/bikeride']);
          },
          (err: Error) => console.log(err),
          () => console.log('Request has completed')
        );
      console.log(this.form.value);
    }
  }

  onChange() 
  {
    alert('onChange pour filtrer les balades via la BDD!');
  }
}
