import { AuthService } from 'src/app/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/models/user.models';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  user: UserModel
  UserId: number;

  isLoadingResults = false;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private authService: AuthService,
    private router: Router
  ) { }


  ngOnInit() {
    console.log(this.route.snapshot.params['id']);
    this.getUser(this.route.snapshot.params['id']);

    this.UserId = this.authService.user.id;
    console.log(this.UserId);
  }

  getUser(id) {
    this.userService.getUser(id)
      .subscribe(data => {
        this.user = data;
        console.log(this.user);
        this.isLoadingResults = true;
      });
  }


}

