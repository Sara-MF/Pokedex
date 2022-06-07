import { ApiService } from './../../service/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  public getPokemons: any;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.apiListPokemons.subscribe(
      response => {
        this.getPokemons = response.results;
      }
    );
  }

}
