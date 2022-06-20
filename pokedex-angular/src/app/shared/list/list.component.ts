import { ApiService } from './../../service/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  private setPokemons: any;
  public getPokemons: any;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.apiListPokemons.subscribe(
      response => {
        this.setPokemons = response.results;
        this.getPokemons = this.setPokemons;
      },
      error => {
        this.apiError = true;
      }
    );
  }

  public getSearch(value: string) {
    const filter = this.setPokemons.filter( (response: any) => {
      return !response.name.indexOf(value.toLowerCase());
    })

    this.getPokemons = filter;
  }

}
