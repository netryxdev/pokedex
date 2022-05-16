import { DataService } from './../service/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {
  pokemons: any[] = [];
  constructor(
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.dataService.getPokemons()
      .subscribe((response: any) => {
        response.results.forEach((result: any) => {
          this.dataService.getMoreData(result.name)
            .subscribe((response: any) => {
              this.pokemons.push(response);
              console.log(this.pokemons);
            });
        });;
      });
  }

}
