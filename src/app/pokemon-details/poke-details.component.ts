import { PokeApiService } from './../service/pokeApi.service';
import { PokemonDetail } from '../models/pokemon.detail';
import { Component, OnInit } from '@angular/core';
import { PokeListComponent } from '../pokemon-list/poke-list.component';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './poke-details.component.html',
  styleUrls: ['./poke-details.component.css']
})
export class PokemonDetailsComponent implements OnInit {

  pokemonName!: PokemonDetail;
  //pokemon!: string;



  constructor(
    public PokeApiService: PokeApiService,
    private activatedRoute: ActivatedRoute,
    public pokemondetail: PokemonDetail
  ) {

  }

  ngOnInit(): void {
    //this.dataService.globalNamePokemon
    this.pokemon;
    //console.log(this.dataService.globalNamePokemon,'funcionou!')
  }

  get pokemon() {
    const name = this.activatedRoute.snapshot.params['name'];
    return console.log(name);
  }

}
