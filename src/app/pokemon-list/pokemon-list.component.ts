import { DataService } from './../service/data.service';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';



@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {
  search = new FormControl('');
  pokemons: any[] = [];
  page = 1;
  totalPokemons: any;
  pokemonName: string = '';
  pokemonDetails: [] = [];

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.getPokemons(); 
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
            });
        });;
      });
    }

    getPokemonName() {
      this.dataService.getPokemonName(this.pokemonName.toLowerCase()).subscribe((response: any) => {
        
        console.log(response);
      });
    }
}

  

