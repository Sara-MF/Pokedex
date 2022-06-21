import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { PokemonsComponent } from './pokemons/pokemons.component';
import { InfoComponent } from './info/info.component';

const routes: Routes = [
  {
    path: '',
    component: PokemonsComponent
  },
  {
    path: 'info',
    component: InfoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KantoRoutingModule { }
