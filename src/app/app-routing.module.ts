import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LesSortiesComponent } from './pages/les-sorties/les-sorties.component';
import { ProposerUneBaladeComponent } from './pages/proposer-une-balade/proposer-une-balade.component';
import { ContactComponent } from './pages/contact/contact.component';
import { MonEspaceComponent } from './pages/mon-espace/mon-espace.component';
import { ConnexionComponent } from './pages/connexion/connexion.component';
import { AddLevelComponent } from './Level/add-level/add-level.component';
import { LoginComponent } from './User/login/login.component';
import { RegisterComponent } from './User/register/register.component';
import { BikerideComponent } from './elements/bikeride/bikeride.component';
import { DetailsBaladeComponent } from './pages/details-balade/details-balade.component';


const routes: Routes = [
  { path:'', component: HomeComponent },
  { path:'les-sorties', component: LesSortiesComponent },
  { path:'proposer-une-balade', component : ProposerUneBaladeComponent },
  { path:'contact', component: ContactComponent },
  { path:'mon-espace', component: MonEspaceComponent},
  { path:'connexion', component: ConnexionComponent },
  { path:'level', component: AddLevelComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'bikerides', component: DetailsBaladeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
