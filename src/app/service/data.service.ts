import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
import { PokemonDetail } from '../models/pokemon.detail';
import { PokemonList } from '../models/pokemon.list';


@Injectable({providedIn: 'root'})
export class DataService {

  private baseUrl = 'https://pokeapi.co/api/v2/';
  globalNamePokemon = '';

  constructor(private http:HttpClient) { }

  // Get Pokemons
  getPokemons(limit: number, offset:number) {
    return this.http.get<PokemonList[]>(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
  }

  // Get More Pokemons Data
  getPokemonName(name: string): Observable<PokemonDetail> {
    this.globalNamePokemon = name
    return this.http.get<PokemonDetail>(this.baseUrl + 'pokemon/' + this.globalNamePokemon);
  }
}
