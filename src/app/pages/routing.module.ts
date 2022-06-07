// esse arquivo foi copiado e colado do app-routing.module.ts
// n foi criado através de comando via terminal
// mudei de AppRoutingModule para RoutingModule para exportar

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// LoadChildren -> app-routing.module.ts
import { HomeComponent } from './home/home.component';
import { StatusComponent } from './status/status.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'status/:id', component: StatusComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class RoutingModule { }
