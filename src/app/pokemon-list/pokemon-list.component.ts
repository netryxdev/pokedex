import { Observable } from 'rxjs';

import { ActivatedRoute, RouterModule, Router } from '@angular/router';
import { DataService } from '../service/data.service';
import { PokemonService } from '../service/pokemon.service';
import { PokemonDetailsComponent } from './../pokemon-details/pokemon-details.component';
import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { PokemonDetail } from '../models/pokemon.detail';


@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {
  search = new FormControl('');
  pokemons: PokemonDetail[] = [];
  page = 1;
  totalPokemons: any;
  pokemonName: string = '';
  pokemonDetails: [] = [];
  searchValidation: boolean = false;
  loading: boolean = false;
  searchPokemon: any;
  pokemonInfo: any;
  getValuePokemon:any= '';

  constructor(
    private dataService: DataService,
    private pokemonService: PokemonService,
    private snack: MatSnackBarModule,
  ) { this.pokemons}

  ngOnInit(): void {
    this.getPokemons(); 
    this.dataService.globalNamePokemon
     //colocar variavel e depois remover daqui do onInit
}


// Get Pokemons
    getPokemons() {
      this.dataService.getPokemons(12, (this.page * 12) - 12).subscribe((response: any) => {
            this.totalPokemons = response.count;
            response.results.forEach((result: any) => {
              this.dataService.getPokemonName(result.name)
                .subscribe((response: any) => {
                  this.pokemons = [...this.pokemons, response].sort(
                    (a, b) => a.id - b.id
                  );
                  this.getValuePokemon = this.pokemons
                });
            });;
          });
        }


    searchPokemonValidation() {
      const value = this.pokemonName;
      if(value == '') {
        this.searchValidation = false;
      } else {
        this.searchValidation = true;
        this.loading = false;
          this.dataService.getPokemonName(value).subscribe((pokemon: any,) => {
          this.searchPokemon = pokemon;
          this.loading = false;
          console.log('search successfull')
          }/* , (error: any) => {
            this.loading = false;
            if(error.status === 400) {
              this.snack.open();
            }
          } */) 
        }
    }

    getSearch(value: string) {
      const filter = this.pokemons.filter( (res:any) => {
        return res.name.includes(value.toLowerCase()); //includes para buscar de forma precisa o resultador mais parecido possível e indexOf faz o contrário
      });
      this.pokemons = filter;
      this.getValuePokemon= this.searchPokemon;
      console.log(this.getValuePokemon)
    }

    getPokemonDetail(name: any) {
      this.pokemonName = name
      const arr: Observable<PokemonDetail>[] = []
      this.dataService.getPokemonName(name.toLowerCase()).subscribe((response: any) => {
        //arr.push(response);
        //console.log(response);
        //this.searchPokemonValidation();
        /* console.log(this.pokemonName)
        this.pokemonInfo = response
        console.log(this.pokemonInfo) */
        
        //location.href = `details/:${this.pokemonName}`
      });
    }
  

}


