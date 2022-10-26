import { PokeApiService } from './../service/pokeApi.service';
import { PokemonDetail } from '../models/pokemon.detail';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { PokeListComponent } from '../pokemon-list/poke-list.component';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
@Component({
  selector: 'app-pokemon-details',
  templateUrl: './poke-details.component.html',
  styleUrls: ['./poke-details.component.css']
})
export class PokemonDetailsComponent implements OnInit, OnDestroy {

  pokemon: any = {};
  pokemonName: any;
  data: any;
  paramsSubscription: Subscription = new Subscription;


  constructor(
    public PokeApiService: PokeApiService,
    private route: ActivatedRoute,
    public pokemondetail: PokemonDetail
  ) {

  }

  ngOnInit(): void {
    this.route.params.subscribe(
        (params: Params) => {
            this.pokemon.name = params['name'];
            this.PokeApiService.getPokemonDetails(this.pokemon.name).subscribe(data => {
              this.pokemon = data;
            }, err => {
              console.log(err)
            });
        }
      );
  }

  ngOnDestroy(): void {
    this.paramsSubscription.unsubscribe();
  }

}
