import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components do module //

// Pages
import { HomeComponent } from './home/home.component';
import { StatusComponent } from './status/status.component';

// Routes
import { RoutingModule } from './routing.module';

// Modules
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    HomeComponent,
    StatusComponent
  ],
  imports: [
    CommonModule,
    RoutingModule,
    SharedModule
  ]
})

export class PagesModule { }
