import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroDetailComponent } from './details/hero-detail.component';
import { HeroesComponent } from './heroes.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    HeroDetailComponent,
    HeroesComponent
  ],
  exports: [
    HeroDetailComponent,
    HeroesComponent
  ]
})
export class HeroesModule { }
