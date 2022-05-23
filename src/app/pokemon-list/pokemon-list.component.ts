import { DataService } from './../service/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {
  pokemons: any[] = [];
  page = 1;
  totalPokemons: any;

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.getPokemons();
}

// Get Pokemons
getPokemons() {
  this.dataService.getPokemons(12, (this.page * 12) - 12)
      .subscribe((response: any) => {
        this.totalPokemons = response.count;

        response.results.forEach((result: any) => {
          this.dataService.getMoreData(result.name)
            .subscribe((response: any) => {
              this.pokemons = [...this.pokemons, response].sort(
                (a, b) => a.id - b.id
              );
              console.log(this.pokemons);
            });
        });;
      });
    }
}
