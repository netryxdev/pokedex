import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'


@Injectable({
  providedIn: 'root'
})
export class DataService {

  private baseUrl = 'https://pokeapi.co/api/v2/';

  constructor(
    private http:HttpClient
  ) { }

  // Get Pokemons
  getPokemons(limit: number, offset:number) {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
  }

  // Get More Pokemons Data
  getPokemonName(name: string) {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
  }
}
