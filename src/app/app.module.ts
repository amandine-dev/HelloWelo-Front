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
import { ContactFormComponent } from './Core/contact-form/contact-form.component';

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
    ContactFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
