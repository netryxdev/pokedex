import { Observable } from 'rxjs';
import { ActivatedRoute, RouterModule, Router } from '@angular/router';
import { PokeApiService } from '../service/pokeApi.service';
import { PokemonService } from '../service/pokemon.service';
import { PokemonDetailsComponent } from '../pokemon-details/poke-details.component';
import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { PokemonDetail } from '../models/pokemon.detail';
import { PokeSearchComponent } from '../search/search.component';


@Component({
  selector: 'poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.css']
})
export class PokeListComponent implements OnInit {

  private setAllPokemons: any;
  public getAllPokemons: any[] = [];

  public apiError: boolean = false;
  
  typeColors: any = [
    {normal: '#A8A77A'},
    {fire: '#EE8130'},
    {water: '#6390F0'},
    {electric: '#F7D02C'},
    {grass: '#7AC74C'},
    {ice: '#96D9D6'},
    {fighting: '#C22E28'},
    {poison: '#A33EA1'},
    {ground: '#E2BF65'},
    {flying: '#A98FF3'},
    {psychic: '#F95587'},
    {bug: '#A6B91A'},
    {rock: '#B6A136'},
    {ghost: '#735797'},
    {dragon: '#6F35FC'},
    {dark: '#705746'},
    {steel: '#B7B7CE'},
    {fairy: '#D685AD'}
  ]

  constructor(
    private pokeApiService: PokeApiService
  ) { }

  ngOnInit(): void {
    this.pokeApiService.apiListAllPokemons
      .subscribe((res: any) => {
        this.setAllPokemons = res.results;
        this.getAllPokemons = this.setAllPokemons;
        // console.log(res)
        // console.log(res.results)
        // console.log(this.getAllPokemons)
      }
    );
  }

  public getSearch(value: string){
    const filter = this.setAllPokemons.filter( (res: any ) => {
      return !res.name.indexOf(value.toLowerCase());
    });

    this.getAllPokemons = filter;
  }

}


