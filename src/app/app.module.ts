//Services
import { PokemonDetail } from './models/pokemon.detail';

//Main Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

//Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';

//Modules
import { NgxPaginationModule } from 'ngx-pagination';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { RouterModule, Routes } from "@angular/router";
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  { path: '', component: PokemonListComponent },
  { path: 'details', component: PokemonDetailsComponent },
  { path: '**', component: PokemonListComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PokemonListComponent,
    PokemonDetailsComponent,
    SearchComponent
  ],
  imports: [
    NgxPaginationModule, // Only works if this is on the very top of the imports array. I don't know why.
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