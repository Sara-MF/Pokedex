import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components do module //

// Pages
import { HomeComponent } from './home/home.component';
import { StatusComponent } from './status/status.component';

// Rotas
import { RoutingModule } from './routing.module';

@NgModule({
  declarations: [
    HomeComponent,
    StatusComponent
  ],
  imports: [
    CommonModule,
    RoutingModule
  ]
})

export class PagesModule { }
