import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonsComponent } from './pokemons/pokemons.component';

// Components
import { KantoRoutingModule } from './kanto-routing.module';
import { InfoComponent } from './info/info.component';

@NgModule({
  declarations: [
    PokemonsComponent,
    InfoComponent
  ],
  imports: [
    CommonModule,
    KantoRoutingModule
  ]
})
export class KantoModule { }
