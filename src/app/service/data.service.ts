import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private http:HttpClient
  ) { }

  // Get Pokemons
  getPokemons() {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon?limit=12`)
  }

  // Get More Pokemons Data
  getMoreData(name: string) {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
  }
}
