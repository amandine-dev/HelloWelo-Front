import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddBikerideComponent } from './elements/add-bikeride/add-bikeride.component';
import { BikerideComponent } from './elements/bikeride/bikeride.component';
import { BikerideListComponent } from './elements/bikeride-list/bikeride-list.component';
import { FooterComponent } from './elements/footer/footer.component';
import { FormSearchComponent } from './elements/form-search/form-search.component';
import { HeaderComponent } from './elements/header/header.component';
import { NavbarComponent } from './elements/navbar/navbar.component';
import { ConnexionComponent } from './pages/connexion/connexion.component';
import { ContactComponent } from './pages/contact/contact.component';
import { LesSortiesComponent } from './pages/les-sorties/les-sorties.component';
import { MonEspaceComponent } from './pages/mon-espace/mon-espace.component';
import { ProposerUneBaladeComponent } from './pages/proposer-une-balade/proposer-une-balade.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddLevelComponent } from './Level/add-level/add-level.component';
import { EditLevelComponent } from './Level/edit-level/edit-level.component';
import { ListLevelComponent } from './Level/list-level/list-level.component';
import { AddTypeComponent } from './Type/add-type/add-type.component';
import { EditTypeComponent } from './Type/edit-type/edit-type.component';
import { ListTypeComponent } from './Type/list-type/list-type.component';
import { ListCityComponent } from './City/list-city/list-city.component';
import { LoginComponent } from './User/login/login.component';
import { RegisterComponent } from './User/register/register.component';
import { DetailsBaladeComponent } from './pages/details-balade/details-balade.component';
import { ToggleBoxComponent } from './elements/toggle-box/toggle-box.component';
import { ContactFormComponent } from './Core/contact-form/contact-form.component';
import { BikerideSearchResultComponent } from './elements/bikeride-search-result/bikeride-search-result.component';
import { SearchResultsComponent } from './pages/search-results/search-results.component';
import { NavOngletComponent } from './User/nav-onglet/nav-onglet.component';
import { OrganiserListComponent } from './User/organiser-list/organiser-list.component';
import { UserBikerideListComponent } from './User/user-bikeride-list/user-bikeride-list.component';
import { UserDetailsComponent } from './User/user-details/user-details.component';
import { BackButtonDirective } from './elements/back-button.directive';

@NgModule({
  declarations: [
    AppComponent,
    AddBikerideComponent,
    BikerideComponent,
    BikerideListComponent,
    FooterComponent,
    FormSearchComponent,
    HeaderComponent,
    NavbarComponent,
    ConnexionComponent,
    ContactComponent,
    LesSortiesComponent,
    MonEspaceComponent,
    ProposerUneBaladeComponent,
    HomeComponent,
    AddLevelComponent,
    EditLevelComponent,
    ListLevelComponent,
    AddTypeComponent,
    EditTypeComponent,
    ListTypeComponent,
    ListCityComponent,
    LoginComponent,
    RegisterComponent,
    DetailsBaladeComponent,
    ToggleBoxComponent,
    ContactFormComponent,
    BikerideSearchResultComponent,
    SearchResultsComponent,
    NavOngletComponent,
    UserDetailsComponent,
    OrganiserListComponent,
    UserBikerideListComponent,
    BackButtonDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule

    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
