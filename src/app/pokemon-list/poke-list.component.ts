import { Observable } from 'rxjs';
import { ActivatedRoute, RouterModule, Router } from '@angular/router';
import { PokeApiService } from '../service/pokeApi.service';
import { PokemonService } from '../service/pokemon.service';
import { PokemonDetailsComponent } from '../pokemon-details/poke-details.component';
import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
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
  public pokeType: any = document.getElementsByClassName('pokeTypeClass');
  public name: any = `lol`;
  public apiError: boolean = false;

  typeColors: any = [
    { types: 'normal', color: '#A8A77A' },
    { types: 'fire', color: '#EE8130' },
    { types: 'water', color: '#6390F0' },
    { types: 'electric', color: '#F7D02C' },
    { types: 'grass', color: '#7AC74C' },
    { types: 'ice', color: '#96D9D6' },
    { types: 'fighting', color: '#C22E28' },
    { types: 'poison', color: '#A33EA1' },
    { types: 'ground', color: '#E2BF65' },
    { types: 'flying', color: '#A98FF3' },
    { types: 'psychic', color: '#F95587' },
    { types: 'bug', color: '#A6B91A' },
    { types: 'rock', color: '#B6A136' },
    { types: 'ghost', color: '#735797' },
    { types: 'dragon', color: '#6F35FC' },
    { types: 'dark', color: '#705746' },
    { types: 'steel', color: '#B7B7CE' },
    { types: 'fairy', color: '#D685AD' }
  ];

  constructor(
    private pokeApiService: PokeApiService
  ) { }

  ngOnInit(): void {
    this.pokeApiService.apiListAllPokemons
      .subscribe((res: any) => {
        this.setAllPokemons = res.results;
        this.getAllPokemons = this.setAllPokemons;
      }
      );
  }

  public getSearch(value: string) {
    const filter = this.setAllPokemons.filter((res: any) => {
      return !res.name.indexOf(value.toLowerCase());
    });

    this.getAllPokemons = filter;
  }

  public getTypeColor(value: any) {
    this.pokeType = value;
    return this.typeColors.filter((item: any) => item.types === value)[0]?.color;
  }
}