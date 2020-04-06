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
import { DetailsBaladeComponent } from './pages/details-balade/details-balade.component';
import { SearchResultsComponent } from './pages/search-results/search-results.component';
import { UserDetailsComponent } from './User/user-details/user-details.component';
import { BikerideListComponent } from './elements/bikeride-list/bikeride-list.component';
import { BikerideComponent } from './elements/bikeride/bikeride.component';
import { AddBikerideComponent } from './elements/add-bikeride/add-bikeride.component';


const routes: Routes = [
  { path:'', component: HomeComponent },
  { path:'les-sorties', component: LesSortiesComponent },
  { path:'proposer-une-balade', component : ProposerUneBaladeComponent },//canActivate: [AuthGuard]//
  { path:'contact', component: ContactComponent },
  { path:'mon-espace', component: MonEspaceComponent },
  { path:'connexion', component: ConnexionComponent, runGuardsAndResolvers: 'always' },
  { path:'level', component: AddLevelComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'balade/:id', component: DetailsBaladeComponent },
  { path: 'search-results/:type', component: SearchResultsComponent },
  { path:'mon-espace', component: MonEspaceComponent },//canActivate: [AuthGuard]//
  { path: 'profil', component: UserDetailsComponent },
  {path: 'user-details', component: UserDetailsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
