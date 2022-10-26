//Services
import { PokemonDetail } from './models/pokemon.detail';

//Main Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

//Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PokeListComponent } from './pokemon-list/poke-list.component';
import { PokemonDetailsComponent } from './pokemon-details/poke-details.component';

//Modules
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterModule, Routes } from "@angular/router";
import { PokeSearchComponent } from './search/search.component';

const routes: Routes = [
  { path: '', component: PokeListComponent },
  { path: 'details/:id', component: PokemonDetailsComponent },
  { path: 'details/:name', component: PokemonDetailsComponent },
  { path: '**', component: PokeListComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PokeListComponent,
    PokemonDetailsComponent,
    PokeSearchComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [PokemonDetail],
  bootstrap: [AppComponent]
})
export class AppModule { }