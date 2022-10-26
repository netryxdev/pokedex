import { PokeApiService } from './../service/pokeApi.service';
import { PokemonDetail } from '../models/pokemon.detail';
import { Component, OnInit } from '@angular/core';
import { PokeListComponent } from '../pokemon-list/poke-list.component';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './poke-details.component.html',
  styleUrls: ['./poke-details.component.css']
})
export class PokemonDetailsComponent implements OnInit {

  pokemon!: { id: number; name: string; } | any;
  pokemonName: any;
  pokemonId: any;
  data: any;

  constructor(
    public PokeApiService: PokeApiService,
    private route: ActivatedRoute,
    public pokemondetail: PokemonDetail
  ) {

  }

  ngOnInit(): void {
    this.pokemon = {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name']
    };
    this.route.params
      .subscribe(
        (params: Params) => {
          this.pokemon.id = params['id'];
          this.pokemon.name = params['name'];
          // aprender como fazer um callback aqui this.PokeApiService.getPokemonDetails(this.pokemon.name);
        }
      );
  }

  get poke() {
    const name = this.route.snapshot.params['name'];
    return console.log(name);
  }

}
