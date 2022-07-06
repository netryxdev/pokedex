import { DataService } from './../service/data.service';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MDCSnackbar } from '@material/snackbar';


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
  searchValidation: boolean = false;
  loading: boolean = false;
  searchPokemon: any;

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
          }) 
        }
    }
  


    getPokemonDetail() {
      this.dataService.getPokemonName(this.pokemonName.toLowerCase()).subscribe((response: any) => {
        
        console.log(response);
        this.searchPokemonValidation();
      });
    }
}

  

