import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LesSortiesComponent } from './pages/les-sorties/les-sorties.component';
import { ProposerUneBaladeComponent } from './pages/proposer-une-balade/proposer-une-balade.component';
import { ContactComponent } from './pages/contact/contact.component';
import { MonEspaceComponent } from './pages/mon-espace/mon-espace.component';
import { ConnexionComponent } from './pages/connexion/connexion.component';

const routes: Routes = [
  { path:'', component: HomeComponent },
  { path:'les-sorties', component: LesSortiesComponent },
  { path:'proposer-une-balade', component : ProposerUneBaladeComponent },
  { path:'contact', component: ContactComponent },
  { path:'mon-espace', component: MonEspaceComponent},
  { path:'connexion', component: ConnexionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
