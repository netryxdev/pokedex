import { PokemonDetail } from '../models/pokemon.detail';
import { Component, OnInit } from '@angular/core';
import { PokemonListComponent } from '../pokemon-list/pokemon-list.component';
import { DataService } from '../service/data.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: '../pokemon-details/pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.css']
})
export class PokemonDetailsComponent implements OnInit {

  pokemonName!: PokemonDetail;
  //pokemon!: string;
  

  
  constructor(
    public dataService: DataService,
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
    const name = this.activatedRoute.snapshot.params['name']
    return console.log(name);
  }

  /* renderPokemonDetail() {
    const name = this.route.snapshot.params['name'];
    const arr: Observable<PokemonDetail>[] = []
    this.dataService.getPokemonName(this.pokemon).subscribe((response: any) => {
      this.pokemonName = response
      console.log(name);
    });
  }  */


}
