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

  constructor(
    private pokeApiService: PokeApiService
  ) { }

  ngOnInit(): void {
    this.pokeApiService.apiListAllPokemons
      .subscribe((res: any) => {
        this.setAllPokemons = res.results;
        this.getAllPokemons = this.setAllPokemons;
        console.log(res)
        // console.log(res.results)
        console.log(this.getAllPokemons)
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
