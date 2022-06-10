import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { forkJoin } from 'rxjs';

import { ApiService } from './../../service/api.service';


@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss']
})

export class StatusComponent implements OnInit {

  private urlPokemon: string = 'https://pokeapi.co/api/v2/pokemon';
  private urlName: string = 'https://pokeapi.co/api/v2/pokemon-species';

  public pokemon: any;

  public isLoading: boolean = false;
  public apiError: boolean = false;

  constructor(private activatedRoute: ActivatedRoute,
              private apiService: ApiService ) { }

  ngOnInit(): void {
    this.pokemonId;
  }

  get pokemonId() {
    const id = this.activatedRoute.snapshot.params['id'];
    const pokemon = this.apiService.apiGetPokemons(`${this.urlPokemon}/${id}`);
    const name = this.apiService.apiGetPokemons(`${this.urlName}/${id}`);

    return forkJoin([pokemon, name]).subscribe(
      response => {
        this.pokemon = response;
        this.isLoading = true;
      },
      error => {
        this.apiError = true;
      }
    );

    //return console.log(id);
  }

}
