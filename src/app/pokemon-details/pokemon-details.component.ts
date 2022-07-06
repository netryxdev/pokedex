import { Component, OnInit } from '@angular/core';
import { PokemonListComponent } from '../pokemon-list/pokemon-list.component';


@Component({
  selector: 'app-pokemon-details',
  templateUrl: '../pokemon-details/pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.css']
})
export class PokemonDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


}
