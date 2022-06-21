import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { ChooseComponent } from './choose/choose.component';

// Routes
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  declarations: [
    ChooseComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
